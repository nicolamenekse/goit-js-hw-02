function formatMessage(message,maxLength){
    if(message.length <= maxLength){
    return (message)
    }else{
       return `${message.slice(0,maxLength)}...`
    }
}

formatMessage("Curabitur ligula sapien",16)
formatMessage("Curabitur ligula sapien" , 23)
formatMessage("Vestibulum facilisis purus nec",20)
formatMessage("Vestibulum facilisis purus nec",30)
formatMessage("Nunc sed turpis a felis in nunc",15)
formatMessage("Nunc set turpis a felis in nunc fringilla",41)

