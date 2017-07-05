<template>
	<div class="card">
		<img :src="picture" class="avatar"/>
		<div class="edit-content" v-if="editing">
			
			<div class="form-control">
				<label for="nameInput">Name</label>
				<input id="nameInput" v-model="full_name">
			</div>
			<div class="form-control">
				<label for="companyInput">Company</label>
				<input id="companyInput" v-model="company">
			</div>
		</div>
		<div class="content" v-else>
			<strong>{{ full_name }}</strong>
			<i>{{ company }}</i>
		</div>
		<div class="controls">
			<button class="btn" @click="editing=true" v-if="!editing">Edit</button>
			<button class="btn danger" @click="destroy" v-if="!editing">Delete</button>
			<button class="btn primary" @click="save" v-if="editing">Save</button>
		</div>
	</div>
</template>

<script>

export default {
	name: 'person',
	props: ['data', 'index'],
	data() {

		return {
			editing: false,
			full_name: this.data.full_name,
			company: this.data.company,
			picture: this.data.picture
		}
	},

	methods: {

		save() {
			this.editing = false
			this.data.full_name = this.full_name;
			this.data.company = this.company;

			this.$store.commit( 'edit', [this.data, this.index])
		},

		destroy(){
			this.$store.commit( 'remove', this.index )
		}

	}


}

</script>

<style scoped lang="scss">
	
	.card{
		background: white;
		box-shadow: 0 2px 4px rgba(0,0,0,.2), 0 0 5px rgba(0,0,0,.1);
		border-radius: 3px;
		margin: 0;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;

		.content, .edit-content{
			text-align: right;
			font-size: .9em;
			padding: .5em 1em;

			strong, i{
				display: block;
			}
		}

		.edit-content{
			text-align: left;
			
			label{
				font-size: .8em;
				font-transform: uppercase;
				font-weight: bold;
				padding: 0 0 .3em 0;
				display: block;
			}

			.form-control{
				margin: 0 0 .6em 0;
			}

			input{
				padding: .4em;
				max-width: 100%;
			}
		}

		.avatar{
			border-radius: 32px;
			margin: .6em 0 0 .6em;
		}

		.controls{
			flex: 1 0 100%;
			padding: .4em;
			background: #eee;
			margin: .6em 0 0 0;
			text-align: right;
		}

		.btn{
			border: 0;
			border-radius: 4px;
			padding: .4em .8em;
			background: teal;
			color: white;
			cursor: pointer;

			&.primary{
				background: dodgerBlue;
			}

			&:hover{
				background: black;
			}

			&.danger{
				background: transparent;
				color: crimson;
				text-decoration: underline;

				&:hover{
					color: black;
				}
			}
		}
	}


</style>