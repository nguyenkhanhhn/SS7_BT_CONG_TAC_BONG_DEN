let SwitchButton= function () {
    this.status= false;
    this.switchOn= function (bongden) {
        this.status=true;
        bongden.turnOn;
        
    }
    this.switchOff=function (bongden) {
        this.status=false;
        bongden.turnOff();
    }

}