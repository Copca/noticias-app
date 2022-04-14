import { Grid, Typography, Pagination, Stack } from '@mui/material';

import useNoticias from '../hooks/useNoticias';

import Noticia from './Noticia';

const ListadoNoticias = () => {
	const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();

	const totalPaginas = Math.ceil(totalNoticias / 20);

	return (
		<>
			<Typography textAlign={'center'} marginY={5} variant='h3' component='h2'>
				Última Noticia
			</Typography>

			<Grid container spacing={2}>
				{noticias.map(noticia => (
					<Noticia key={noticia.url} noticia={noticia} />
				))}
			</Grid>

			<Stack
				spacing={2}
				direction={'row'}
				justifyContent='center'
				alignItems={'center'}
				marginY={4}
			>
				<Pagination
					count={totalPaginas}
					color='primary'
					page={pagina}
					onChange={handleChangePagina}
				/>
			</Stack>
		</>
	);
};

export default ListadoNoticias;
