import Vue from 'vue';
function create(component, props) {

    // Vue.extend 属于Vue全局api。
    // 使用基础Vue构造器，创建一个“子类”，参数是一个包含组件选项的对象

    // 创建构造器
    // var Profile = Vue.extend({
    //     template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
    //     data: function () {
    //     return {
    //         firstName: 'Walter',
    //         lastName: 'White',
    //         alias: 'Heisenberg'
    //     }
    //     }
    // })

    // 创建 Profile 实例，并挂载到一个元素上。
    // new Profile().$mount('#mount-point')
    
    // 可以看到，extend 创建的是 Vue 构造器，而不是我们平时常写的组件实例，所以不可以通过 new Vue({ components: testExtend }) 来直接使用，
    // 需要通过 new Profile().$mount('#mount-point') 来挂载到指定的元素上。
    // 我们可以通过 $el 属性来访问 extendComponent 组件实例


    const Ctor = Vue.extend(component);

    const comp = new Ctor({propsData: props});
    comp.$mount();

    document.body.appendChild(comp.$el);

    comp.remove = function () {
        document.body.removeChild(comp.$el);
        comp.$destroy();
    };



    // 创建一个Vue实例
    // const vm = new Vue({
        // render函数将传入数组配置对象转化为虚拟dom
    //     render: h => h(component, { props })
    // }).$mount();  //执行挂载函数，但为指定挂载目标。表示只执行初始化工作。（因为挂载是覆盖线动作，所以这里不直接挂载在body上）

    // 将生成的dom元素追加至body
    // document.body.appendChild(vm.$el)

    // 给组件实例添加销毁方法
    // const comp = vm.$children[0];
    // comp.remove = function() {
    //     document.body.removeChild(vm.$el);
    //     vm.$destroy(); 
    // }

    return comp;
}

export default create;