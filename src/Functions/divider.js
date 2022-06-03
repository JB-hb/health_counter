

export default function divider(max){

    let save = []
    const step = max/5

    for(let i = 0; i < max; i+=step ){
        let obj = {
            min : i,
            maxi : i + step,
            cuart : step/4
        }
        save.push(obj)
    }
    return save

}