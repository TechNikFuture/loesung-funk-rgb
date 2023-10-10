input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Alles_Senden = "" + RGB_1_Senden + "," + RGB_2_Senden + "," + RGB_3_Senden
    radio.sendString(Alles_Senden)
})
radio.onReceivedString(function (receivedString) {
    RGB_Decrypted = receivedString.split(",")
    basic.setLedColor(parseFloat(RGB_Decrypted[Calliope_Nummer]))
})
let RGB_Decrypted: string[] = []
let Alles_Senden = ""
let RGB_3_Senden = 0
let RGB_2_Senden = 0
let RGB_1_Senden = 0
let Calliope_Nummer = 0
Calliope_Nummer = 3 - 1
radio.setGroup(4)
RGB_1_Senden = basic.rgb(0, 0, 255)
RGB_2_Senden = basic.rgb(0, 255, 0)
RGB_3_Senden = basic.rgb(255, 0, 0)
