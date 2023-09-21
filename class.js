// class Tree {
//     constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
//       this.size = size;
//       this.leaves = leaves;
//       this.leafColor = null;
//     }
  
//     changeSeason(season) {
//       this.leafColor = this.leaves[season];
//       if (season === 'spring') {
//         this.size += 1;
//       }
//     }
//   }
  
//   class Maple extends Tree {
//     constructor(syrupQty = 15, size, leaves) {
//       super(size, leaves);
//       this.syrupQty = syrupQty;
//     }
  
//     changeSeason(season) {
//       super.changeSeason(season);
//       if (season === 'spring') {
//         this.syrupQty += 1;
//       }
//     }
  
//     gatherSyrup() {
//       this.syrupQty -= 3;
//     }
//   }
  
//   const myMaple = new Maple(15, 5);
//   myMaple.changeSeason('fall');
//   myMaple.gatherSyrup();
//   myMaple.changeSeason('spring');


class Vehicle {
    constructor (color = 'blue', wheels = 4, horn = 'beep beep') {
        this.color = color;
        this.wheels = wheels;
        this.horn = horn
    }
    honkHorn() {
		console.log(this.horn);
	}
}
class Bicycle extends Vehicle{
    constructor (color = 'blue', wheels = 2, horn = 'honk honk') {
        super(color,wheels,horn)
    }

}
const vehicle = new Vehicle()
vehicle.honkHorn()
const myBike = new Bicycle();
myBike.honkHorn(); // honk hon