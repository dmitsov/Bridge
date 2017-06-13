    Bridge.define("System.Uri", {
        ctor: function (uriString) {
            this.$initialize();
            this.absoluteUri = uriString;
        },

        $ctor1: function (baseUri, relativeUri) {
            this.$initialize();
            this.absoluteUri = baseUri.absoluteUri + relativeUri;
        },

        getAbsoluteUri: function () {
            return this.absoluteUri;
        },

        toString: function () {
            return this.absoluteUri;
        }
    });
