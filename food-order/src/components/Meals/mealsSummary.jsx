import React from 'react';
import classes from './mealsSummary.module.css';

const MealsSummary = props => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Food, Delivered to You</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo enim sunt culpa amet, dicta harum minus ut quam animi ipsum incidunt possimus maiores pariatur adipisci. Officia quo odio soluta vitae.
                Obcaecati culpa beatae repudiandae sit quidem sapiente ullam quos ipsa! Ab facilis deserunt commodi veniam ducimus temporibus inventore ratione est quos quis fugit, explicabo aperiam id totam officia pariatur laboriosam!
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo laboriosam adipisci error harum praesentium! Modi quis quod a quasi animi fugit, assumenda quia tempora magnam officia, dolores velit possimus itaque.
                Et vero nesciunt dolores hic quia voluptate. Eius eos, vero reiciendis dolorem laboriosam sed corporis possimus repellendus voluptatem natus autem eum culpa dolorum, accusantium iusto, nobis aliquam adipisci. Quibusdam, iusto.
            </p>
        </section>
    );
}

export default MealsSummary;