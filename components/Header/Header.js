import Query from '../Query/Query';
import styled from '@emotion/styled';

import { rem } from 'polished';
import CATEGORIES_QUERY from '../../pages/api/queries/category/categories';

const Header = () => {
	return (
		<HeaderStyled>
			<div className="container">
				<div className="nav">  
					<img src="/images/logo.svg" alt="logo" />
					<Query query={CATEGORIES_QUERY} id={null}>
						{({ data: { categories } }) => {
							return (
								<div>
									<nav className="uk-navbar-container" data-uk-navbar>
										<div className="uk-navbar-left">
											<ul className="uk-navbar-nav">
												<li>
													<a to="/">Strapi Blog</a>
												</li>
											</ul>
										</div>

										<div className="uk-navbar-right">
											<ul className="uk-navbar-nav">
												{categories.map((category) => {
													return (
														<li key={category.id}>
															<a
																to={`/category/${category.id}`}
																className="uk-a-reset"
															>
																{category.name}
															</a>
														</li>
													);
												})}
											</ul>
										</div>
									</nav>
								</div>
							);
						}}
					</Query>
				</div>
			</div>
		</HeaderStyled>

	)
}

const HeaderStyled = styled.header`
    background: ${props => props.theme.colors.primary};

    .nav__list-item {
        font-size: ${rem(20)};
    }
`

export default Header;
