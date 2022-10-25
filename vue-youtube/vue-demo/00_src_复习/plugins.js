export default {
    install(Vue,x,y,z){
        console.log(Vue,x,y,z);

        Vue.filter('myslice',function(value){
            return value.slice(0,4)

        })
        Vue.prototype.hello=()=>{alert('你好啊!!!')}
        Vue.prototype.A='黑桃A'

        Vue.mixin({
            methods:{
                showMixin(){
                    console.log('我是混入&混合');
                }
            }
        })

        Vue.directive('fbind',{
            bind(element,binding){
                element.value=binding.value
                console.log(element,binding);
            },
            inserted(element,binding){
                element.focus()
            },
            update(element,binding){
                element.value=binding.value

            },
        })
    }
}