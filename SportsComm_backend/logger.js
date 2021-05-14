import { createLogger, format, transports } from "winston";
import "winston-daily-rotate-file";
import { existsSync, mkdirSync } from "fs";
import { basename } from "path";

const env = "development";

const logDir = "log";
const datePatternConfiguration = {
  default: "YYYY-MM-DD",
  everHour: "YYYY-MM-DD-HH",
  everMinute: "YYYY-MM-DD-THH-mm",
};
numberOfDaysToKeepLog = 30;
fileSizeToRotate = 1; // in megabyte

// Create the log directory if it does not exist
if (!existsSync(logDir)) {
  mkdirSync(logDir);
}

const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: `${logDir}/%DATE%-results.log`,
  datePattern: datePatternConfiguration.everHour,
  zippedArchive: true,
  maxSize: `${fileSizeToRotate}m`,
  maxFiles: `${numberOfDaysToKeepLog}d`,
});

const logger = createLogger({
  // change level if in dev environment versus production
  level: env === "development" ? "verbose" : "info",
  handleExceptions: true,
  format: format.combine(
    format.label({ label: basename(module.parent.filename) }),
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.printf(
      (info) =>
        `${info.timestamp}[${info.label}] ${info.level}: ${JSON.stringify(
          info.message
        )}`
    )
  ),
  transports: [
    new transports.Console({
      level: "info",
      handleExceptions: true,
      format: format.combine(
        format.label({ label: basename(module.parent.filename) }),
        format.colorize(),
        format.printf(
          (info) =>
            `${info.timestamp}[${info.label}] ${info.level}: ${info.message}`
        )
      ),
    }),
    dailyRotateFileTransport,
  ],
});

logger.stream = {
  write: (message) => {
    logger.info(message);
  },
};

export default logger;
