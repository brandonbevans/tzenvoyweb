<template>
    <v-layout
            align-center
            column
            justify-center
            id="delegate"
    >
        <h1 class="display-4 mb-3 pt-5" v-text="title"></h1>
<!--        <span class="subheading">Please switch to a new baker. The last cycle that Tz Envoy will payout is cycle 200!</span>-->
        <h2 class="display-1" v-text="subtitle"></h2>
<!--        <v-card flat class="mt-3">-->
<!--            <v-container fill-height class="clickable"-->
<!--                         v-clipboard:copy=bakingAddress-->
<!--                         v-clipboard:success=onCopy>-->
<!--                <v-layout fill-height row wrap>-->
<!--                    <v-flex xs12 align-end>-->
<!--                        <span class="headline" v-text=bakingAddress></span>-->
<!--                    </v-flex>-->
<!--                </v-layout>-->
<!--            </v-container>-->
<!--        </v-card>-->
<!--        <a :href=tzstatsLink target="_blank" class="text&#45;&#45;darken-1 white&#45;&#45;text">tzstats</a>-->
<!--        <div class="text-xs-center mb-5 pb-5" :style="{ visibility: showCopy }">-->
<!--            <v-chip dark color="success" >Copied</v-chip>-->
<!--        </div>-->
<!--        <v-card class="mb-4">-->
<!--            <v-container fill-height-->
<!--                         v-clipboard:copy=bakingAddress-->
<!--                         v-clipboard:success=onCopy>-->
<!--                <v-layout fill-height row wrap>-->
<!--                    <v-flex xs12 align-end>-->
<!--&lt;!&ndash;                        <span class="title">Fee: 10%</span><br>&ndash;&gt;-->
<!--&lt;!&ndash;                        <span class="subheading">Rewards are sent automatically as the network releases them.</span>&ndash;&gt;-->
<!--                    </v-flex>-->
<!--                </v-layout>-->
<!--            </v-container>-->
<!--        </v-card>-->
<!--        <v-card flat class="mt-3">-->
<!--                &lt;!&ndash; Begin Mailchimp Signup Form &ndash;&gt;-->
<!--                &lt;!&ndash; Begin Mailchimp Signup Form &ndash;&gt;-->
<!--            <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">-->
<!--            <div id="mc_embed_signup">-->
<!--                <form action="https://gmail.us3.list-manage.com/subscribe/post?u=67c9a6e36997f3ef975a89658&amp;id=cfb45c1a02" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>-->
<!--                    <div id="mc_embed_signup_scroll">-->
<!--                        <h2>Subscribe for important updates about TzEnvoy Baking</h2>-->
<!--                        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>-->
<!--                        <div class="mc-field-group">-->
<!--                            <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>-->
<!--                            </label>-->
<!--                            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">-->
<!--                        </div>-->
<!--                        <div id="mce-responses" class="clear">-->
<!--                            <div class="response" id="mce-error-response" style="display:none"></div>-->
<!--                            <div class="response" id="mce-success-response" style="display:none"></div>-->
<!--                        </div>    &lt;!&ndash; real people should not fill this in and expect good things - do not remove this or risk form bot signups&ndash;&gt;-->
<!--                        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_67c9a6e36997f3ef975a89658_cfb45c1a02" tabindex="-1" value=""></div>-->
<!--                        <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>-->
<!--                    </div>-->
<!--                </form>-->
<!--            </div>-->

<!--                &lt;!&ndash;End mc_embed_signup&ndash;&gt;-->
<!--                &lt;!&ndash;                            <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>&ndash;&gt;-->
<!--                &lt;!&ndash;End mc_embed_signup&ndash;&gt;-->
<!--        </v-card>-->
        <br><br><br><br><br>
    </v-layout>
</template>

<script>

    export default {
        name: "Title",
        mounted: function() {
        },
        data: function() {
            return {
                bakingAddress: "tz1iJ4qgGTzyhaYEzd1RnC6duEkLBd1nzexh",
                tzstatsLink: "https://tzstats.com/tz1iJ4qgGTzyhaYEzd1RnC6duEkLBd1nzexh",
                showCopy: "hidden",
                title: "tzEnvoy",
                subtitle: "IS SHUTTING DOWN! Final payout period is cycle 200!",
            }
        },
        methods: {
            onCopy: function () {
                this.showCopy = "visible"
                setTimeout(() => this.showCopy = "hidden", 600)
            }
        }
    }
</script>

<style scoped>
.clickable {
    cursor: pointer;
}
</style>