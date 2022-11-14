const jwt = require("jsonwebtoken");

const verify = () => {
  jwt.verify(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmE5Nzk4YzA2M2I0ZGRkOTdlZjkzMiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Njc5Mzc4NjZ9.e7lHHnBAyQszBswtQhAnWHjTkSnEa-e14tKojoIy9qI",
    "jkajdgkajncad134103950195145",
    (err, res) => {
      if (err) console.log(err);
      else console.log(res);
    },
  );
};

verify();
