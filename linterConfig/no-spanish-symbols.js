// no-spanish-symbols.js

export default {
	meta: {
		type: "suggestion",
		docs: {
			description:
				"Enforce that no symbol `ñ` can be used in the name of a variable.",
		},
		fixable: "code",
		schema: [],
	},
	create(context) {
		return {
					VariableDeclarator(node) {
						if (node.id.type === "Identifier" && /ñ/i.test(node.id.name)) {
							context.report({
								node: node.id,
								message: "Variable name '{{name}}' contains the symbol 'ñ'.",
								data: {
									name: node.id.name
								},
								fix(fixer) {
									// Replace 'ñ' with 'nn' in the variable name
									const fixedName = node.id.name.replace(/ñ/gi, "nn");
									return fixer.replaceText(node.id, fixedName);
								}
							});
						}
					}
		};
	},
};
