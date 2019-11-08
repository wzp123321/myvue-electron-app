import myloading from "./index.vue"


export default {
  install(Vue, options) {
    const Loading = Vue.extend(myloading);
    const Profile = new Loading({
      el: document.createElement("div")
    });

    document.body.appendChild(Profile.$el);

    //定义显示隐藏的方法  open 会传入一个text 字符串。如果有则赋值给组件内默认值。
    const myLoadingMethod = {
      open(text) {
        Profile.show = true;
        if (text) {
          Profile.text = text;
        }
      },
      hide() {
        Profile.show = false;
      }
    };
    //添加实例方法 把自定义方法挂载到Vue构造器的上,这样每个实例都可以调用。
    Vue.prototype.$myLoading = myLoadingMethod;
  }
}
