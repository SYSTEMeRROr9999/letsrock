// CLASS EXAMPLE

class Aayan{

    callAayan(id){
        if(!id) throw new Error("Pass the id !")
        console.log(`[${id}] called AAYAN`)
    }

    blockAayan(id){
        if(!id) throw new Error("Pass the id !")
        console.log(`[${id}] Blocked Aayan`)
    }
}


const msg = new Aayan()
msg.callAayan()

