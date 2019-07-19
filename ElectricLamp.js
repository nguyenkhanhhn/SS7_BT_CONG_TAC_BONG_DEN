let ElectricLamp= function () {
    this.status=false;
    this.turnOn= function () {
        this.status=true;
    }
    this.turnOff= function () {
        this.status=false;

    }

}
let lamp= new ElectricLamp();
let switchbtn = new SwitchButton();
 function On() {
     switchbtn.switchOn(lamp);
     if (lamp.status=true){
         alert('Bóng đèn bật');
     }

 }
function Off() {
     switchbtn.switchOff(lamp);
         alert('Bóng đèn tắt');


}