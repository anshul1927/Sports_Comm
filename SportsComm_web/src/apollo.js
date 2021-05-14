import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const TOKEN = "token";
let TYPE = true;
export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));
export const usertype = makeVar();

export const logUserIn = (token, type) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
  if (type === "Admin") {
    usertype(true);
    TYPE = true;
  } else {
    usertype(false);
    TYPE = false;
  }
  console.log(usertype());
};

export const logUserOut = () => {
  localStorage.removeItem(TOKEN);
  isLoggedInVar(false);
  if (TYPE) {
    usertype(false);
  } else {
    usertype(true);
  }
};

export const darkModeVar = makeVar(false);

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
