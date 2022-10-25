export  const mixin = {
    methods:{
        showName(){
            alert(this.name)
            console.log('第三 mixin混入');
        }
    },
    mounted(){
        // console.log('你好啊!');
    }
}
export const mixin2 = {
    data(){
        return {
            x:20,
            y:30
        }
    },
    methods:{
        showX(){
            console.log(this.x);
        },
        showY(){
            console.log(this.y);
        }
    }
 
}