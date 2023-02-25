import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  console.log("TOKEN==>", token);

  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  };
});
console.log("uri===>", process.env.NEXT_PUBLIC_SERVER_URI);
console.log("uriS3===>", process.env.NEXT_PUBLIC_S3_SERVER_URL);
console.log(".....>", process.env.NEXT_PUBLIC_S3_SERVER_URL);

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql",
});
// console.log("Link===>",authLink.concat(httpLink));
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
