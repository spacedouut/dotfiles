local module = {}

<* for name, value in colors *>
module["{{name}}"] = "{{value.default.hex}}";
<* endfor *>

return module
