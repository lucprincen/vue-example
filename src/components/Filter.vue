<template>
	<nav class="filters">
		<h4>Filter</h4>

		<button class="filter name" @click="setFilter('name')">

			<!-- user icon -->
			<svg class="svg-icon user" viewBox="0 0 20 20">
				<path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
			</svg>

			<span>By name</span>
		</button>
		<button class="filter company" @click="setFilter('company')">
			
			<!-- by company -->
			<svg class="svg-icon" viewBox="0 0 20 20">
				<path d="M17.283,5.549h-5.26V4.335c0-0.222-0.183-0.404-0.404-0.404H8.381c-0.222,0-0.404,0.182-0.404,0.404v1.214h-5.26c-0.223,0-0.405,0.182-0.405,0.405v9.71c0,0.223,0.182,0.405,0.405,0.405h14.566c0.223,0,0.404-0.183,0.404-0.405v-9.71C17.688,5.731,17.506,5.549,17.283,5.549 M8.786,4.74h2.428v0.809H8.786V4.74z M16.879,15.26H3.122v-4.046h5.665v1.201c0,0.223,0.182,0.404,0.405,0.404h1.618c0.222,0,0.405-0.182,0.405-0.404v-1.201h5.665V15.26z M9.595,9.583h0.81v2.428h-0.81V9.583zM16.879,10.405h-5.665V9.19c0-0.222-0.183-0.405-0.405-0.405H9.191c-0.223,0-0.405,0.183-0.405,0.405v1.215H3.122V6.358h13.757V10.405z"></path>
			</svg>

			<span>By employer</span>
		</button>
	</nav>
</template>


<script>

export default {

	name: 'filter',

	methods: {

		setFilter( filter ){
			console.log( filter );
			this.$store.state.filterBy = filter
		}

	}

}

</script>

<style scoped lang="scss">
	.filters{
		display: flex;
		justify-content: flex-end;
		align-items: center;

		h4{
			margin: 0 1em 0 0;
		}

		button{
			padding: .4em .8em;
			border: 1px solid transparent;
			background: transparent;
			text-align: center;
			margin: 0 0 0 1em;
			cursor: pointer;

			span{
				font-size: .8em;
				text-align: center;
				display: block;
				width: 100%;
				color: #4691f6;
				font-weight: bold;
			}

			&:hover{
				background: #4691f6;
				border-radius: 4px;

				span{ color: papayawhip; }

				.svg-icon{
					path, polygon, rect{
						fill: papayawhip;
					}
					circle{
						stroke: papayawhip;
					}
				}
			}
		}
	}
</style>
