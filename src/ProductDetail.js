import React from 'react';
import products from './products';
import Layout from './Layout';
import Context from './context';
import trans from './trans';

class ProductDetail extends React.Component{
    render(){
        const slug = this.props.match.params.slug;
        const product = products.find(product => product.slug == slug);

        return(
          <Context.Consumer>
            {context =>{
              return(
                <Layout>
                  <div className="columns">
                    <div className="column is-12">
                      <nav className="breadcrumb" aria-label="breadcrumbs">
                        <ul>
                          <li><a href="/">Products</a></li>
                          <li className="is-active">
                            <a href="#" aria-current="page">{product.title}</a>
                          </li>
                        </ul>
                      </nav>
                      <h3 className="title">{product.title}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-5">
                      <figure className="image">
                        <img alt="Rustic Plastic Bacon" src={product.imageUrl} />
                      </figure>
                    </div>
                    <div className="column is-5">
                      <div className="column has-text-weight-semibold has-text-dark is-size-4">
                        {product.price}
                      </div>
                      <div className="column">
                        {product.description}
                      </div>
                      <div className="column">
                        <a className="button is-primary is-uppercase">{trans[context.state.language]['Add to Cart']}</a>
                      </div>
                    </div>
                  </div>      
                </Layout>
              )
            }}
          </Context.Consumer>
        )
    }
}

export default ProductDetail;