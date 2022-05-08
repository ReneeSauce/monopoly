const Monopoly = {
	board: [],
	players: [],
	tokens: [],
	bank: []
};

class Deed {
	constructor(group,price,rents) {
		this._owner = 'bank';
		this._group = group;
		this._price = price;
		this._houses = 0;
		this._rent = rents;
		this._mortgage = false;
	}
};

class