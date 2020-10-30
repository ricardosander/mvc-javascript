class ProxyFactory {

    static create(model, props, action) {
        return new Proxy(model, {
            
            get(target, prop, reciever){

                if (props.includes(prop) && typeof(target[prop] == typeof(Function))) {
                
                    return function() {
                        Reflect.apply(target[prop], target, arguments);
                        action(target);
                    }
                }


                return Reflect.get(target, prop, reciever);
            },

            set(target, prop, value, reciever) {

                if (props.includes(prop)) {
                    target[prop] = value;
                    action(target);
                }

                return Reflect.set(target, prop, value, reciever);
            }

        });
    }
}