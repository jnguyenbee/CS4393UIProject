<template>
    <div>
        <b-card style="max-width: 800px;" title="Shipping Address">
            <b-form @continue="onContinue">
                <b-row>
                    <b-col>
                        <b-form-group
                            id="input-group-1"
                            label="First Name:"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.firstname"
                            type="firstName"
                            required
                            placeholder="Enter First Name"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-col>
                        <b-form-group
                            id="input-group-2"
                            label="Last Name:"
                            label-for="input-2"
                        >
                            <b-form-input
                                id="input-2"
                                v-model="form.lastname"
                                type="lastName"
                                required
                                placeholder="Enter Last Name"
                                ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col>
                        <b-form-group
                            id="input-group-3"
                            label="Address:"
                            label-for="input-3"
                        >
                            <b-form-input
                                id="input-3"
                                v-model="form.address"
                                type="address"
                                required
                                placeholder="Enter Address"
                                ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col>
                        <b-form-group
                            id="input-group-4"
                            label="State:"
                            label-for="input-4"
                        >
                            <b-form-input
                                id="input-4"
                                v-model="form.state"
                                type="state"
                                required
                                placeholder="Enter State"
                                ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group
                            id="input-group-5"
                            label="Zip:"
                            label-for="input-5"
                        >
                            <b-form-input
                                id="input-5"
                                v-model="form.zip"
                                type="zip"
                                required
                                placeholder="Enter Zip Code"
                                ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                    
                <b-row>
                    <b-col>
                        <b-form-group
                            id="input-group-6"
                            label="Credit Card Number:"
                            label-for="input-6"
                        >
                            <b-form-input
                                id="input-6"
                                v-model="form.ccn"
                                type="ccn"
                                required
                                placeholder="    -    -    -    "
                                ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col>
                        <b-form-group
                            id="input-group-7"
                            label="Exp Date:"
                            label-for="input-7"
                        >
                            <b-form-input
                                id="input-7"
                                v-model="form.exp"
                                type="exp"
                                required
                                placeholder="  /  "
                                ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group
                            id="input-group-8"
                            label="CCV:"
                            label-for="input-8"
                        >
                            <b-form-input
                                id="input-8"
                                v-model="form.CCV"
                                type="ccv"
                                required
                                placeholder="Enter CCV"
                                ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
            </b-form>
            <div align="center">
                <b-button variant="primary">Continue to Check Out</b-button>
            </div>
        </b-card>
    </div>
</template>s

<script>
export default {
    name: 'Checkout',
    data() {
        return {
            form: {
                firstname: '',
                lastName: '',
                address: '',
                state: '',
                zip: '',
                ccn: '',
                exp: '',
                csv: ''
            }
        }
    },
    methods: {
        onContinue(evt) {
            evt.preventDefault()
        }
    }
};
</script>

<style scoped>
.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  max-width: 800px;
  background: rgb(248, 243, 243);
}
</style>