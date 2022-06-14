import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import mainpage from "./mainpage";
import program from "./program";
import team from "./team";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([mainpage, program, team]),
});
