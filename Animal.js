function Animal(name){this.name = name}
function Human(){Animal.apply(this, arguments)}
function SuperHero(){Human.apply(this, arguments)}

/* function Animal(name){this.name = name}
function Human(){Animal.apply(this, arguments)}
function SuperHero(){Human.apply(this, arguments)}
function main(){
	return {
		test : function(){
				Animal.prototype.setName = function(name){this.name = name}
	            Animal.prototype.getName = function(){return this.name}

		}
	}
} */