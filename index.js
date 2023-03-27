const { FormData, Method } = require ("vkstatic")

const vk = new FormData ({
    token: ""
})

const response = async ()=> {
    const resmany = await new Method ().use ("groups.get", {})

    for (length in resmany.response.items) {
        await new Method ().use ("groups.leave", { group_id: resmany.response.items [length]})
    }
}

response ()
