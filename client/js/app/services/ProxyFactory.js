class ProxyFactory {

    static create(model, props, action) {
        return new Proxy(model, {
            
            get(target, prop, reciever){

                if (props.includes(prop) && typeof(target[prop] == typeof(Function))) {
                
                    return function() {
                        let result = Reflect.apply(target[prop], target, arguments);
                        action(target);
                        return result;
                    }
                }


                return Reflect.get(target, prop, reciever);
            },

            set(target, prop, value, reciever) {

                let result = Reflect.set(target, prop, value, reciever);
                if (props.includes(prop)) {
                    action(target);
                }
                return result;
            }

        });
    }
}