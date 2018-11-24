import React from 'react';
import {Link} from   'react-router-dom';
import products from './products';
import Layout from './Layout';
import Context from './context';
import trans from './trans';

class ProductList extends React.Component{
    render(){
        return(
            <Layout>
              <div className="columns">
                <div className="column is-full">
                  <div>
                    <h3 className="title">Our Products</h3>
                    <div className="columns">

                      { products.map(product => {
                        return(
                          <div class="column">
                            <Link to={`/product/${product.slug}`}>
                              <div class="card">
                                <div class="card-image">
                                  <figure class="image is-4by3">
                                    <img alt="Rustic Plastic Bacon" src={product.imageUrl} />
                                  </figure>
                                </div>
                                <div class="card-content">
                                  <div class="media">
                                    <div class="media-content">
                                      <p class="title is-4">{product.title}</p>
                                      <div class="content">
                                        {product.description}
                                        <br />
                                      </div>
                                      <h5>{product.price}</h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        )}
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Layout>
        )
    }
}

export default ProductList;
