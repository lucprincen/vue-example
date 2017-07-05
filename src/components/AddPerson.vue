<template>
	<div>
		<button @click="overlay=true" class="btn primary">
			<svg class="svg-icon" viewBox="0 0 20 20">
				<path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path>
			</svg>
			<span>
				Add Person
			</span>
		</button>

		<div class="overlay" v-show="overlay" @click.self="overlay=false">
			<div class="popup">
				<button @click="overlay=false" class="close">&times;</button>
				
				<h3>Add a person</h3>
				<div class="form-control">
					<label for="personName">Name</label>
					<input ref="personName" v-model="full_name">
				</div>

				<div class="form-control">
					<label for="personCompany">Company</label>
					<input ref="personCompany" v-model="company" @keyup.enter="savePerson">
				</div>

				<div class="form-control buttons">
					<button class="btn primary" @click="savePerson">Save</button>
				</div>
			</div>
		</div>
	</div>

</template>

<script>

	export default{

		name: 'add-person',

		data() {
			return {
				overlay: false,
				full_name: '',
				company: '',
			}
		},

		methods: {

			/** Save a person */
			savePerson(){

				if( this.validateInputs() ){
					
					let _data = {
						'_id': this.$store.getters.peopleCount,
						'picture': 'http://lorempixel.com/64/64/people',
						'full_name': this.full_name,
						'company': this.company
					}

					this.full_name = '';
					this.company = '';
					this.overlay = false;

					this.$store.commit( 'add', _data );

				}
			},

			/** Validate the inputs, focus them if they're empty */
			validateInputs(){

				if( this.full_name == '' ){
					this.$refs.personName.focus()
					return false;
				}

				if( this.company == '' ){
					this.$refs.personCompany.focus()
					return false;
				}

				return true;
			}
		}

	}

</script>



<style scoped lang="scss">
		
	.overlay{
		position: fixed;
		top: 0;
		left: 0;
		right: 0; 
		bottom: 0;
		background: rgba(0,0,0,.7);
		display: flex;
		align-items: center;
		justify-content: center;

		.popup{
			width: 300px;
			background: white;
			padding: 1.5em;
			box-shadow: 0 0 10px rgba(0,0,0,.4);
			position: relative;

			h3{
				margin: -.5em 0 2em 0;
			}

			.close{
				background: none;
				border: 0;
				font-size: 2em;
				position: absolute;
				top: .3em;
				right: .5em;
				cursor: pointer;

				&:hover{
					color: crimson;
				}
			}

			.btn{
				font-size: 1.1em;
				display: inline-block;
			}

			.form-control{
				width: 100%;
				display: block;
				margin-bottom: 1em;

				label{
					display: block;
				}

				input{
					padding: .5em;
					width: 100%;
				}

				&.buttons{
					text-align: right;
				}
			}
		}
	}


</style>