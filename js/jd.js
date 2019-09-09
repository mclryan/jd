(function (){//城市选择
    var city = document.querySelector('.city');
    var sel = document.querySelector('.sel');
    var lis = sel.children;
    var prevIndex = 0;
    lis[prevIndex].className = 'show'
    lis[prevIndex].index = 1;

    city.onmouseover = function (){
        sel.style.display = 'flex';
        city.className = 'city open';
    }

    city.onmousemove = function (e){
        var ev = e || window.event;
        if (ev.target.nodeName == 'LI' && ev.target.parentNode.className == 'sel' && ev.target.index != 1){
            ev.target.className = 'hover';
        }
    }

    for (var i = 0; i < lis.length; i++) {
        lis[i].n = i
        lis[i].onclick = function (){
            var val = this.innerHTML;
            sel.previousElementSibling.innerHTML = val;
            this.className = 'show';
            this.index = 1;
            lis[prevIndex].index = 0;
            lis[prevIndex].className = '';
            prevIndex = this.n;
            sel.style.display = 'none';
        }   
    }

    city.onmouseout = function (){   
        sel.style.display = 'none';
        city.className = 'city';
    }

    sel.onmouseout = function (e){
        var ev = e || window.event;
        if (ev.target.nodeName == 'LI' && ev.target.parentNode.className == 'sel' &&ev.target.index != 1){
            ev.target.className = '';
        }
    }


})();


(function (){//nav
    var myjd = document.querySelector('.myjd');
    var myjdbox = document.querySelector('.myjdbox');

    myjd.onmouseover = function (){
        myjdbox.style.display = 'block';
        myjd.className = 'myjd open';
    }

    myjd.onmousemove = function (e){
        var ev = e || window.event;
        if (ev.target.nodeName == 'P' && ev.target.parentNode.parentNode.className == 'myjdbox'){
            ev.target.className = 'red';
        }

    }

    myjd.onmouseout = function (e){
        var ev = e || window.event;
        myjdbox.style.display = 'none';
        myjd.className = 'myjd';
        if (ev.target.nodeName == 'P' && ev.target.parentNode.parentNode.className == 'myjdbox'){
            ev.target.className = '';
        }
    }

    var stock = document.querySelector('.stock');
    var stockbox = document.querySelector('.stockbox');

    stock.onmouseover = function (){
        stockbox.style.display = 'block';
        stock.className = 'stock open';
    }

    stock.onmousemove = function (e){
        var ev = e || window.event;
        if (ev.target.nodeName == 'P' && ev.target.parentNode.parentNode.className == 'stockbox'){
            ev.target.className = 'red';
        }

    }

    stock.onmouseout = function (e){
        var ev = e || window.event;
        stockbox.style.display = 'none';
        stock.className = 'stock';
        if (ev.target.nodeName == 'P' && ev.target.parentNode.parentNode.className == 'stockbox'){
            ev.target.className = '';
        }
    }

    var service = document.querySelector('.service');
    var servicebox = document.querySelector('.servicebox');

    service.onmouseover = function (){
        servicebox.style.display = 'block';
        service.className = 'service open';
    }

    service.onmousemove = function (e){
        var ev = e || window.event;
        if (ev.target.nodeName == 'P' && ev.target.parentNode.parentNode.className == 'servicebox'){
            ev.target.className = 'red';
        }

    }

    service.onmouseout = function (e){
        var ev = e || window.event;
        servicebox.style.display = 'none';
        service.className = 'service';
        if (ev.target.nodeName == 'P' && ev.target.parentNode.parentNode.className == 'servicebox'){
            ev.target.className = '';
        }
    }

    var website = document.querySelector('.website');
    var websitebox = document.querySelector('.websitebox');

    website.onmouseover = function (){
        websitebox.style.display = 'block';
        website.className = 'website open';
    }

    website.onmousemove = function (e){
        var ev = e || window.event;
        if (ev.target.nodeName == 'P' && ev.target.parentNode.parentNode.className == 'websitebox'){
            ev.target.className = 'red';
        }

    }

    website.onmouseout = function (e){
        var ev = e || window.event;
        websitebox.style.display = 'none';
        website.className = 'website';
        if (ev.target.nodeName == 'P' && ev.target.parentNode.parentNode.className == 'websitebox'){
            ev.target.className = '';
        }
    }

    var sharecode = document.querySelector('.sharecode');
    var qrcode = document.querySelector('.qrcode');
    var img1 = document.querySelector('#img1');

    sharecode.onmouseover = function (){
        img1.src = 'images/未标题-1_03.jpg';
        qrcode.style.left = '-120px';

    }

    sharecode.onmouseout = function (){
        img1.src = 'images/QQ图片20190823213226_03.jpg';
        qrcode.style.left = '-6px';

    }

    var cart = document.querySelector('.cart');
    var span = document.querySelector('.search span');
    
    span.onmouseover = function (){
        cart.style.display = 'block';
        span.firstElementChild.style.borderColor = '#e1251b';
        span.firstElementChild.style.borderBottom = 'none';
    }

    span.onmouseout = function (){
        cart.style.display = 'none';
        span.firstElementChild.style.borderColor = '#eeeeee';
        span.firstElementChild.style.borderBottom = '1px solid #eeeeee';
    }

})();

(function (){
    var logo = document.querySelector('.logo img');
    var timer,timer2,n = 0,i = 0;

    setTimeout(function (){
        logo.src = 'images/201908232132216_03.jpg';
    },3500);
    function logotimer(){
        timer = setInterval(function (){
            logo.src = 'images/38714fb6679b8daf.gif';
            setTimeout(function (){
                logo.src = 'images/201908232132216_03.jpg';
            },4800);

        },12000)
    }
    logotimer();

    logo.onmouseenter = function (){
        clearInterval(timer);
        clearTimeout(timer2);
        logo.src = 'images/38714fb6679b8daf.gif';
        timer2 = setTimeout(function (){
            logo.src = 'images/201908232132216_03.jpg';
            logotimer();
        },4800);

    }

    var text = document.querySelector('.text');
    var textArr = ['对开门冰箱','美妆超级品牌日','超薄本','投影仪','办公椅'];

    setInterval(function (){
        text.placeholder = textArr[n]
        n++;
        if (n >= textArr.length){
            n = 0;
        }
    },5500)

    var li1 = document.querySelector('.center ol li');
    var liArr = ['中秋会员日','手机免息日','家清制品季','分千万京豆'];

    setInterval(function (){
        li1.innerHTML = '<a href="#">' + liArr[i] + '</a>';
        i++;
        if (i >= liArr.length){
            i = 0;
        }
    },2500)


})();

(function (){//左边选项卡
	var typenav = document.querySelector('.typenav');
	var lis = document.querySelectorAll('.typenav i');
	
	for (var i = 0; i < lis.length; i++) {
		lis[i].onmouseenter = function (){
			this.lastElementChild.style.display = 'block';
            this.style.backgroundColor = '#d9d9d9';
		}
		lis[i].onmouseleave = function (){
			this.lastElementChild.style.display = 'none';
            this.style.backgroundColor = '#fff';
		}
	}
	
	typenav.onmouseover = function (e){
		var ev = e || window.event;
		if (ev.target.nodeName == 'SPAN'){
			ev.target.className = 'red';
		}
	}
	
	typenav.onmouseout = function (e){
		var ev = e || window.event;
		if (ev.target.nodeName == 'SPAN'){
			ev.target.className = '';
		}
	}
	
})();

(function (){//中间轮播图
    var timer2,index = 0;

    function ConverImg(imgs,carleft,carright,nums){
        this.imgs = imgs;
        this.carleft = carleft;
        this.carright = carright;
        this.nums = nums;
        this.init();
    }

    ConverImg.prototype.init = function (){//初始化
        this.move(this.imgs[index],100);
        this.imgs[index].style.zIndex = 3;
        this.nums[index].className = 'numshow';
        this.autoMove();
        this.enternums();
        this.clickLeft();
        this.clickRight();
    }

    ConverImg.prototype.move = function (dom,target){//透明动画
        var opa = 20;
        dom.timer = null;
        dom.timer = setInterval(function (){
            if(opa > target){
                var speed = -5;
            }else{
                var speed = 5;
            }
            if(Math.abs(target-opa) < Math.abs(speed)){
                dom.style.opacity = target / 100;
                clearInterval(dom.timer);
            }else{
                opa += speed;
                dom.style.opacity = opa / 100;
            }
        },30);
    }

    ConverImg.prototype.autoMove = function (){//自动播放
        var _this = this;
        timer2 = setInterval(function (){
            _this.imgs[index].style.opacity = 0.2;
            _this.imgs[index].style.zIndex = 1;
            _this.nums[index].className = '';
            index++;
            if(index >= _this.imgs.length){
                index = 0;
            }
            _this.move(_this.imgs[index],100);
            _this.imgs[index].style.zIndex = 3;
            _this.nums[index].className = 'numshow';
        },3000)
    }

    ConverImg.prototype.clickLeft = function (){
        var _this = this;
        this.carleft.onclick = function (){
            clearInterval(timer2);
            clearInterval(_this.imgs[index].timer);
            _this.imgs[index].style.opacity = 0.2;
            _this.imgs[index].style.zIndex = 1;
            _this.nums[index].className = '';
            index--;
            if(index < 0){
                index = _this.imgs.length - 1;
            }
            _this.move(_this.imgs[index],100);
            _this.imgs[index].style.zIndex = 3;
            _this.nums[index].className = 'numshow';
            _this.autoMove();
        }
        this.carleft.onmouseenter = function (){
            this.style.opacity = 0.8;
        }
        this.carleft.onmouseleave = function (){
            this.style.opacity = 0.2;
        }
    }

    ConverImg.prototype.clickRight = function (){
        var _this = this;
        this.carright.onclick = function (){
            clearInterval(timer2);
            clearInterval(_this.imgs[index].timer);
            _this.imgs[index].style.opacity = 0.2;
            _this.imgs[index].style.zIndex = 1;
            _this.nums[index].className = '';
            index++;
            if(index >= _this.imgs.length){
                index = 0;
            }
            _this.move(_this.imgs[index],100);
            _this.imgs[index].style.zIndex = 3;
            _this.nums[index].className = 'numshow';
            _this.autoMove();
        }
        this.carright.onmouseenter = function (){
            this.style.opacity = 0.8;
        }
        this.carright.onmouseleave = function (){
            this.style.opacity = 0.2;
        }
    }

    ConverImg.prototype.enternums = function (){//点击数字
        var _this = this;
        for (var i = 0; i < nums.length; i++) {
            this.nums[i].n = i;
            this.nums[i].onmouseenter = function (){
                clearInterval(timer2);
                clearInterval(_this.imgs[index].timer);
                _this.imgs[index].style.opacity = 0.2;
                _this.imgs[index].style.zIndex = 1;
                _this.nums[index].className = '';
                index = this.n;
                _this.move(_this.imgs[index],100);
                _this.imgs[index].style.zIndex = 3;
                _this.nums[index].className = 'numshow';
                _this.autoMove();
            }
        }
    }

    var imgs = document.querySelectorAll('.carousel img');
    var carleft = document.querySelector('.carleft');
    var carright = document.querySelector('.carright');
    var nums = document.querySelectorAll('.carnum i');
    new ConverImg(imgs,carleft,carright,nums);
})();

(function (){//三图轮播
    var index = 0,timer2;

    function ConverImg2(imgs_1,imgs_2,imgs_3,carleft,carright){
        this.imgs_1 = imgs_1;
        this.imgs_2 = imgs_2;
        this.imgs_3 = imgs_3;
        this.carleft = carleft;
        this.carright = carright;
        this.init();
    }

    ConverImg2.prototype.init = function (){//初始化
        this.move(this.imgs_1[index],100);
        this.move(this.imgs_2[index],100);
        this.move(this.imgs_3[index],100);
        this.upImg();
        this.autoMove();
        this.clickLeft();
        this.clickRight();
        this.mouseover();
    }

    ConverImg2.prototype.downImg = function (){//图片下沉
        this.imgs_1[index].style.opacity = 0.2;
        this.imgs_2[index].style.opacity = 0.2;
        this.imgs_3[index].style.opacity = 0.2;
        this.imgs_1[index].style.zIndex = 1;
        this.imgs_2[index].style.zIndex = 1;
        this.imgs_3[index].style.zIndex = 1;
    }

    ConverImg2.prototype.upImg = function (){//图片上升
        this.imgs_1[index].style.zIndex = 3;
        this.imgs_2[index].style.zIndex = 3;
        this.imgs_3[index].style.zIndex = 3;
    }

    ConverImg2.prototype.autoMove = function (){//自动播放
        timer2 = setInterval(function (){
            this.downImg();
            index++;
            if(index >= this.imgs_1.length){
                index = 0;
            }
            this.move(this.imgs_1[index],100);
            this.move(this.imgs_2[index],100);
            this.move(this.imgs_3[index],100);
            this.upImg();
        }.bind(this),5000)
    }

    ConverImg2.prototype.move = function (dom,target){//透明动画
        var opa = 20;
        dom.timer = null;
        dom.timer = setInterval(function (){
            if(opa > target){
                var speed = -5;
            }else{
                var speed = 5;
            }
            if(Math.abs(target-opa) < Math.abs(speed)){
                dom.style.opacity = target / 100;
                clearInterval(dom.timer);
            }else{
                opa += speed;
                dom.style.opacity = opa / 100;
            }
        },30);
    }

    ConverImg2.prototype.clickLeft = function (){//点击左边
        this.carleft.onclick = function () {
            clearInterval(timer2);
            clearInterval(this.imgs_1[index].timer);
            clearInterval(this.imgs_2[index].timer);
            clearInterval(this.imgs_3[index].timer);
            this.downImg();
            index--;
            if(index < 0){
                index = this.imgs_1.length - 1;
            }
            this.move(this.imgs_1[index],100);
            this.move(this.imgs_2[index],100);
            this.move(this.imgs_3[index],100);
            this.upImg();
            this.autoMove();
        }.bind(this);
        this.carleft.onmouseenter = function (){
            this.style.opacity = 0.8;
        }
        this.carleft.onmouseleave = function (){
            this.style.opacity = 0.2;
        }
    }

    ConverImg2.prototype.clickRight = function (){//点击右边
        this.carright.onclick = function () {
            clearInterval(timer2);
            clearInterval(this.imgs_1[index].timer);
            clearInterval(this.imgs_2[index].timer);
            clearInterval(this.imgs_3[index].timer);
            this.downImg();
            index++;
            if(index >= this.imgs_1.length){
                index = 0;
            }
            this.move(this.imgs_1[index],100);
            this.move(this.imgs_2[index],100);
            this.move(this.imgs_3[index],100);
            this.upImg();
            this.autoMove();
        }.bind(this)
        this.carright.onmouseenter = function (){
            this.style.opacity = 0.8;
        }
        this.carright.onmouseleave = function (){
            this.style.opacity = 0.2;
        }
    }

    ConverImg2.prototype.mouseover = function (){
        this.carleft.parentNode.onmouseover = function (){
            this.carleft.style.opacity = 0.2;
            this.carright.style.opacity = 0.2;
        }.bind(this);
        this.carleft.parentNode.onmouseout = function (){
            this.carleft.style.opacity = 0;
            this.carright.style.opacity = 0;
        }.bind(this);
    }


    /*class ConverImg2{
        constructor(imgs_1,imgs_2,imgs_3,carleft,carright){
            this.imgs_1 = imgs_1;
            this.imgs_2 = imgs_2;
            this.imgs_3 = imgs_3;
            this.carleft = carleft;
            this.carright = carright;
            this.init();
        }

        init = function (){//初始化
            this.move(this.imgs_1[index],100);
            this.move(this.imgs_2[index],100);
            this.move(this.imgs_3[index],100);
            this.upImg();
            this.autoMove();
            this.clickLeft();
            this.clickRight();
            this.mouseover();
        }
    
        downImg = function (){//图片下沉
            this.imgs_1[index].style.opacity = 0.2;
            this.imgs_2[index].style.opacity = 0.2;
            this.imgs_3[index].style.opacity = 0.2;
            this.imgs_1[index].style.zIndex = 1;
            this.imgs_2[index].style.zIndex = 1;
            this.imgs_3[index].style.zIndex = 1;
        }
    
        upImg = function (){//图片上升
            this.imgs_1[index].style.zIndex = 3;
            this.imgs_2[index].style.zIndex = 3;
            this.imgs_3[index].style.zIndex = 3;
        }
    
        autoMove = function (){//自动播放
            timer2 = setInterval(function (){
                this.downImg();
                index++;
                if(index >= this.imgs_1.length){
                    index = 0;
                }
                this.move(this.imgs_1[index],100);
                this.move(this.imgs_2[index],100);
                this.move(this.imgs_3[index],100);
                this.upImg();
            }.bind(this),5000)
        }
    
        move = function (dom,target){//透明动画
            var opa = 20;
            dom.timer = null;
            dom.timer = setInterval(function (){
                if(opa > target){
                    var speed = -5;
                }else{
                    var speed = 5;
                }
                if(Math.abs(target-opa) < Math.abs(speed)){
                    dom.style.opacity = target / 100;
                    clearInterval(dom.timer);
                }else{
                    opa += speed;
                    dom.style.opacity = opa / 100;
                }
            },30);
        }
    
        clickLeft = function (){//点击左边
            this.carleft.onclick = function () {
                clearInterval(timer2);
                clearInterval(this.imgs_1[index].timer);
                clearInterval(this.imgs_2[index].timer);
                clearInterval(this.imgs_3[index].timer);
                this.downImg();
                index--;
                if(index < 0){
                    index = this.imgs_1.length - 1;
                }
                this.move(this.imgs_1[index],100);
                this.move(this.imgs_2[index],100);
                this.move(this.imgs_3[index],100);
                this.upImg();
                this.autoMove();
            }.bind(this);
            this.carleft.onmouseenter = function (){
                this.style.opacity = 0.8;
            }
            this.carleft.onmouseleave = function (){
                this.style.opacity = 0.2;
            }
        }
    
        clickRight = function (){//点击右边
            this.carright.onclick = function () {
                clearInterval(timer2);
                clearInterval(this.imgs_1[index].timer);
                clearInterval(this.imgs_2[index].timer);
                clearInterval(this.imgs_3[index].timer);
                this.downImg();
                index++;
                if(index >= this.imgs_1.length){
                    index = 0;
                }
                this.move(this.imgs_1[index],100);
                this.move(this.imgs_2[index],100);
                this.move(this.imgs_3[index],100);
                this.upImg();
                this.autoMove();
            }.bind(this)
            this.carright.onmouseenter = function (){
                this.style.opacity = 0.8;
            }
            this.carright.onmouseleave = function (){
                this.style.opacity = 0.2;
            }
        }
    
        mouseover = function (){
            this.carleft.parentNode.onmouseover = function (){
                this.carleft.style.opacity = 0.2;
                this.carright.style.opacity = 0.2;
            }.bind(this);
            this.carleft.parentNode.onmouseout = function (){
                this.carleft.style.opacity = 0;
                this.carright.style.opacity = 0;
            }.bind(this);
        }
    }*/

    var imgs_1 = document.querySelectorAll('.imgshow1 img');
    var imgs_2 = document.querySelectorAll('.imgshow2 img');
    var imgs_3 = document.querySelectorAll('.imgshow3 img');
    var carleft = document.querySelector('.carleft2');
    var carright = document.querySelector('.carright2');
    new ConverImg2(imgs_1,imgs_2,imgs_3,carleft,carright);
})();

(function (){//倒计时
    var spans = document.querySelectorAll('.time span');
    setInterval(function (){
        // var date = new Date(`2019/${new Date().getMonth()+1}/${new Date().getDate()} 23:59:59`);
        var date = new Date('2019/'+(new Date().getMonth()+1)+'/'+(new Date().getDate())+' 23:59:59');
        var time = date.getTime()-Date.now();
        var s = parseInt(time/1000%60);
        var m = parseInt(time/1000/60%60);
        var h = parseInt(time/1000/60/60);
        s = s<10 ? '0'+s : s;
        m = m<10 ? '0'+m : m;
        h = h<10 ? '0'+h : h;
        spans[0].innerHTML = h;
        spans[1].innerHTML = m;
        spans[2].innerHTML = s;
    },1000)

})();


