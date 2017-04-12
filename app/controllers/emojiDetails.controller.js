var bm;
(function (bm) {
    var controllers;
    (function (controllers) {
        var EmojiDetails = (function () {
            function EmojiDetails($stateParams) {
                this.emojis = {
                    "a": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f170.png?v7",
                    "ab": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f18e.png?v7",
                    "abc": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f524.png?v7",
                    "abcd": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f521.png?v7",
                    "accept": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f251.png?v7",
                    "aerial_tramway": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a1.png?v7"
                };
                console.log($stateParams);
                this.emoji = $stateParams.emoji || this.emojis[$stateParams.id];
            }
            return EmojiDetails;
        }());
        controllers.EmojiDetails = EmojiDetails;
        EmojiDetails.$inject = ["$stateParams"];
    })(controllers = bm.controllers || (bm.controllers = {}));
})(bm || (bm = {}));
//added this class
//# sourceMappingURL=emojiDetails.controller.js.map