class HttpService {

    get(url) {

        return new Promise((resolve, reject) => {

            console.log(`Realizando GET ${url}`);

            let xhr = new XMLHttpRequest();
            xhr.open("GET", url);

            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status != 200) {
                        console.log(`Houve um erro na requisição GET ${url} : ${xhr.status} - ${xhr.responseText}`);
                        return reject(xhr.responseText);
                    }

                    resolve(JSON.parse(xhr.responseText));
                }
            }

            xhr.send();
        });
    }

    post(url, entity) {

        return new Promise((resolve, reject) => {

            console.log(`Realizando POST ${url}`);

            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");

            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status != 200) {
                        console.log(`Houve um erro na requisição POST ${url} : ${xhr.status} - ${xhr.responseText}`);
                        return reject(xhr.responseText);
                    }

                    resolve(entity);
                }

            }

            xhr.send(JSON.stringify(entity));
        });

    }
}