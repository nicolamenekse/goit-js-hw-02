function checkForSpam(message) {
    if (message.toLowerCase().includes("spam")) {
        return true

    } else if (message.toLowerCase().includes("sale")) {
        return true

    } else {
        return false

    }
}

checkForSpam("Latest technology news")
checkForSpam("JavaScript weekly newsletter")
checkForSpam("Get best sale offers now!")
checkForSpam("Amazing SalE, only tonight!")
checkForSpam("Trust me, this is not a spam message")
checkForSpam("Get rid of sPaM emails. Our book in on sale!")
checkForSpam("[SPAM] How to earn fast money?")