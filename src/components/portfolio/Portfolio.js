import React from 'react';
import {portfolioBlocks} from '../../constants/portfolio_blocks';
import {PortfolioBlock} from './PortfolioBlock';
import {transitionDecorator} from '../../decorators/transition_decorator';

@transitionDecorator
export class Portfolio extends React.Component {
    render() {
        return (
            <section className="portfolio">
                <article className="portfolio-container">
                    {
                        portfolioBlocks.map(block => {
                            const {
                                name,
                                description,
                                previewUrl,
                                link
                            } = block;

                            return (
                                <PortfolioBlock
                                    key={name}
                                    name={name}
                                    description={description}
                                    previewUrl={previewUrl}
                                    link={link}
                                />
                            );
                        })
                    }
                </article>
            </section>
        );
    }
}