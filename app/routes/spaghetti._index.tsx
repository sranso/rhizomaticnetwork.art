import { Link } from '@remix-run/react';

export default function Start() {
  return (
    <main className='max-w-full mx-12 space-y-8 mb-6'>
      <div className='max-h-screen mx-6'>
        <img src='/spaghetti.jpg' alt='spaghetti' />
      </div>
      <p className='text-sky-950 text-md max-w-4xl block'>
        With a characteristic flourish of perversity linking painting to pasta,
        Martin Kippenberger identified the most important problem to be
        addressed on canvas since Warhol in an interview of 1990–91: “Simply to
        hang a painting on the wall and say that it’s art is dreadful. The whole
        network is important! Even spaghettini . . . . When you say art, then
        everything possible belongs to it. In a gallery that is also the floor,
        the architecture, the color of the walls.” If we take Kippenberger at
        his word, a significant question arises:{' '}
        <i>How does painting belong to a network?</i> This late
        twentieth-century problem, whose relevance has only increased with the
        ubiquity of digital networks, joins a sequence of modernist questions:
        How does painting signify in the semiotic aporias of Cubism or the
        non-objective utopias of the historical avant-gardes?{' '}
        <i>How can the status of painting as matter be made explicit</i> (i.e.,
        through the incorporation of readymades, and the rise of the monochrome
        and seriality as well as the gestural techniques of dripping, pouring,
        and staining)? And{' '}
        <i>How might painting meet the challenge of mechanical reproduction</i>{' '}
        (as in strategies of appropriation spanning Pop’s silk screens of the
        1960s and the Pictures generation’s return to painting in the 1980s)?
        None of these problems exists in isolation or ever disappears; instead,
        there are shifts in emphasis in which earlier questions are reformulated
        through newer ones.
      </p>
      <p>
        from{' '}
        <a
          href='http://www.reenaspaulings.com/images3/0911djoselit.pdf'
          target='_blank'
          className='underline'
        >
          Painting Beside Itself
        </a>
      </p>
    </main>
  );
}
