var foo = {
	x: 2,
	baz: {
		x: 1,
		bar: function () {
			return this.x;
		},
	},
};
