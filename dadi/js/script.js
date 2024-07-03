let user_number = Math.floor(Math.random() * 6 + 1);
let pc_number = Math.floor(Math.random() * 6 + 1);

if (user_number > pc_number) {
    console.log("hai vinto")
}
else if (user_number < pc_number) {
    console.log("hai perso")
}