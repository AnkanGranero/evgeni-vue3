import { createClient } from "contentful";
const authToken = "Bearer EERtWev1qrZXK5wQxGJCVs-W7rEOPkjIHMn38xopqDU";

const client = createClient({
  space: "77vux6lerjt0",
  environment: "master",
  accessToken: "EERtWev1qrZXK5wQxGJCVs-W7rEOPkjIHMn38xopqDU",
});

function destructureCvItem(resp, contentType) {

}


export default function fetchFromContentful(contentType) {
return client
    .getEntries({
      content_type: contentType,
    })
    .then((response) => {
      return response.items
    })
    .catch(console.error);
}