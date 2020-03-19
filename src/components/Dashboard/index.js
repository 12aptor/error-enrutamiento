import React, { useState, useEffect, Fragment } from 'react'
import { Typography, Paper, Avatar, CircularProgress, Button } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import firebase from '../firebase'
import { withRouter } from 'react-router-dom'

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
})

function Dashboard(props) {
	const { classes } = props
	console.log(props);

	const [quote, setQuote] = useState('')
	const [fbimg1, setFbimg1] = useState('')
	const [fbv1, setFbv1] = useState('')
	const [fbv2, setFbv2] = useState('')
	const [fbv3, setFbv3] = useState('')
	const [fbv4, setFbv4] = useState('')
	const [yt, setYt] = useState('')
	const [bg1, setBg1] = useState('')
	const [bg2, setBg2] = useState('')
	const [bg3, setBg3] = useState('')
	const [bg4, setBg4] = useState('')

	let confirmar = firebase.getCurrentUsername()
	useEffect(() => {
		if (firebase.getCurrentUsername()) {
			firebase.getCurrentUserQuote().then(setQuote)
			firebase.uno().then(setFbimg1)
			firebase.dos().then(setFbv1)
			firebase.tres().then(setFbv2)
			firebase.cuatro().then(setFbv3)
			firebase.cinco().then(setFbv4)
			firebase.seis().then(setYt)
			firebase.siete().then(setBg1)
			firebase.ocho().then(setBg2)
			firebase.nueve().then(setBg3)
			firebase.dies().then(setBg4)
		}
	}, [confirmar])

	if (!firebase.getCurrentUsername()) {
		alert('Please login first')
		props.history.replace('/login')
		return null
	}

	// if (!firebase.getCurrentUsername()) {
	// 	// not logged in
	// 	alert('Please login first')
	// 	props.history.replace('/login')
	// 	return null
	// }

	// useEffect(() => {
	// 	firebase.getCurrentUserQuote().then(setQuote)
	// })

	let totalFacebook = (fbimg1 * 0.2) + (fbv1 * 2) + (fbv2 * 5) + (fbv3 * 10) + (fbv4 * 40);
	let totalYoutube = yt * 5;
	let totalBlog = (bg1 * 0.5) + (bg2 * 5) + (bg3 * 10) + (bg4 * 20);
	let pagoTotal = totalFacebook + totalYoutube + totalBlog;

	return (
		<Fragment>
			<main className={classes.main}>
				<Paper className={classes.paper}>
					<Avatar className={classes.avatar}>
						<VerifiedUserOutlined />
					</Avatar>
					<Typography component="h1" variant="h5">
						Hello {firebase.getCurrentUsername()}
					</Typography>
					<Typography component="h1" variant="h5">
						You WhatsApp: {quote ? `"${quote}"` : <CircularProgress size={20} />}
					</Typography>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="secondary"
						onClick={logout}
						className={classes.submit}>
						Logout
          			</Button>
				</Paper>
			</main>
			<div className="container mb-3">
				<div className="row">
					<div className="col-md-6 mt-3">
						<div className="card shadow">
							<div className="card-body">
								<h4>DETALLES DE PUBLICACIONES</h4>
								<hr />
								<p><strong style={{ color: 'blue' }}>FACEBOOK IMAGENES/+1,000likes <small className="text-muted">* 0.2USD/publicación</small></strong>: {fbimg1}</p>
								<p><strong style={{ color: 'blue' }}>FACEBOOK VIDEOS/+10,000views <small className="text-muted">* 2USD/publicación</small></strong>: {fbv1}</p>
								<p><strong style={{ color: 'blue' }}>FACEBOOK VIDEOS/+100,000views <small className="text-muted">* 5USD/publicación</small></strong>: {fbv2}</p>
								<p><strong style={{ color: 'blue' }}>FACEBOOK VIDEOS/+1,000,000views <small className="text-muted">* 10USD/publicación</small></strong>: {fbv3}</p>
								<p><strong style={{ color: 'blue' }}>FACEBOOK VIDEOS/+10,000,000views <small className="text-muted">* 40USD/publicación</small></strong>: {fbv4}</p>
								<p><strong style={{ color: 'red' }}>YOUTUBE /+10,000views <small className="text-muted">* 5USD/publicación</small></strong>: {yt}</p>
								<p><strong style={{ color: 'gray' }}>BLOG /+1,000views <small className="text-muted">* 0.5USD/publicación</small></strong>: {bg1}</p>
								<p><strong style={{ color: 'gray' }}>BLOG /+10,000views <small className="text-muted">* 5USD/publicación</small></strong>: {bg2}</p>
								<p><strong style={{ color: 'gray' }}>BLOG /+100,000views <small className="text-muted">* 10USD/publicación</small></strong>: {bg3}</p>
								<p><strong style={{ color: 'gray' }}>BLOG /+1,000,000views <small className="text-muted">* 20USD/publicación</small></strong>: {bg4}</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 mt-3">
						<div className="card shadow">
							<div className="card-body">
								<h4>DETALLES DE PAGOS</h4>
								<hr />
								<p><strong style={{ color: 'blue' }}>FACEBOOK </strong>: {totalFacebook} USD</p>
								<p><strong style={{ color: 'red' }}>YOUTUBE </strong>: {totalYoutube} USD</p>
								<p><strong style={{ color: 'gray' }}>BLOG </strong>: {totalBlog} USD</p>
								<p><strong>TOTAL: </strong>{pagoTotal} USD</p>
								<hr />
								<h6>HISTORIAL DE PAGOS</h6>
								<table className="table table-bordered">
									<thead>
										<tr>
											<th>fecha</th>
											<th>cantidad</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>---</td>
											<td>--- USD</td>
										</tr>
										<tr>
											<td>---</td>
											<td>--- USD</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)

	async function logout() {
		await firebase.logout()
		props.history.push('/')
	}
}

export default withRouter(withStyles(styles)(Dashboard))