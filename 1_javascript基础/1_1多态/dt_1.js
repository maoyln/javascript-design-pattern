/**
 * 多态定义：同一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结果
 * 
 * 多态背后的思想：是将“做什么”和“谁去做以及怎样去做”分离开来，也就是将“不变的事物”与“可能改变的事物”分离开来。
 * 
 */

// 先来一段反例的多态代码
// let makeSound = function(animal) {
// 	if (animal instanceof Duck) {
// 		console.log('瓜瓜瓜');

// 	} else if (animal instanceof Chicken) {
// 		console.log('唧唧唧');
// 	}
// }
// let Duck = function () { };
// let Chicken = function () { };

// makeSound(new Duck());
// makeSound(new Chicken());

/**
 * 上面这种写法并不理想，如果在加一个其他动物，还需要修改makeSound，种类越来越多，很容易出错。
 */

// 首先把不变的部分隔离出来
let makeSound = function (animal) {
	animal.sound();
}

// 然后把可变的部分各自封装起来，我们刚才谈到的多态性实际上指的是对象的多态性：
let Duck = function() {}
Duck.prototype.sound = function () {
  console.log('瓜瓜瓜');
}


let Chicken = function () {}
Chicken.prototype.sound = function () {
  console.log('唧唧唧')
}

makeSound(new Duck()); // 瓜瓜瓜
makeSound(new Chicken()); // 唧唧唧


// 此时新增一个狗，只需要追加一下代码就可以了
let Dog = function () {}
Dog.prototype.sound = function () {
  console.log('汪汪汪');
}

makeSound(new Dog()); // 汪汪汪
