const newman = require("newman")

newman.run({
    collection: "json-collection/Maulana.postman_collection.json",
    environment: "json-env/Maulana.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})
