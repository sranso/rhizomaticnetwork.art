import { Link } from '@remix-run/react';

export default function Why() {
  return (
    <main>
      {/* what is the message here. how can i make this more silly.
also look at notion notes, at alan watts */}
      <h1>Sources</h1>
      <ul className='[&>li]:list-disc [&>li]:list-inside [&>li]:ml-4 mt-4'>
        <li>
          <Link
            to='https://files.libcom.org/files/A%20Thousand%20Plateaus.pdf'
            target='_blank'
          >
            <i>A Thousand Plateaus</i> by Deleuze and Guattari
          </Link>
          <ul className='[&>li]:list-disc [&>li]:list-inside ml-2 mb-2 [&>li]:ml-4'>
            <li>
              A rhizomatic system is comprised of a multiplicity of lines and
              connections. "There are no points or positions in a rhizome, such
              as those found in a structure, tree, or root. There are only
              lines."
            </li>
            <li>
              A rhizome is a concept in post-structuralism describing a
              nonlinear network. It appears in the work of French
              theorists Deleuze and Guattari, who used the term in their book A
              Thousand Plateaus to refer to networks that establish "connections
              between semiotic chains, organizations of power, and circumstances
              relative to the arts, sciences and social struggles" with no
              apparent order or coherency
            </li>
          </ul>
        </li>
        <li>
          <Link
            to='https://literariness.org/2017/04/26/the-philosophical-concept-of-rhizome/'
            target='_blank'
          >
            The philosophical concept of rhizome
          </Link>
          <ul className='[&>li]:list-disc [&>li]:list-inside ml-2 mb-2 [&>li]:ml-4'>
            <li>
              The word [rhizome] is associated with postmodern theorists {' '}
              <Link
                to='https://literariness.org/2016/12/09/psychoanalysis-of-deleuze-and-guattari/'
                target='_blank'
              >
                Gilles Deleuze
              </Link>{' '}
              and{' '}
              <Link
                to='https://literariness.org/2016/12/09/psychoanalysis-of-deleuze-and-guattari/'
                target='_blank'
              >
                Felix Guattari
              </Link>
              , who use the rhizome to describe a process of existence and
              growth that does not come from a single central point of origin...
              arborescence or the model of the tree as the paradigm for
              knowledge and practice in the modern Western world; in this model,
              a small idea—a seed or acorn—takes root and grows into a tree with
              a sturdy trunk supporting numerous branches, all linked to and
              traceable back to the original seed. They offer instead the
              rhizome or fungus, which is an organism of interconnected living
              fibers that has no central point, no origin, and no particular
              form or unity or structure.{' '}
              <b>
                A rhizome does not start from anywhere or end anywhere; it grows
                from everywhere, and is the same at any point.
              </b>
            </li>
            <li>
              The rhizome is a-linear, multiple, spread out, all{' '}
              <b>
                proliferating and without boundaries centres/margins or limits.
              </b>{' '}
              This is what Deleuze terms a <b>“horizontality” of thought.</b>{' '}
              Rejecting the “Father Principle” or the principle of the
              origin-as-identity, Deleuze and Guattari argue that{' '}
              <b>
                there is no distinction between the individual and the
                collective.
              </b>
            </li>
          </ul>
        </li>
        <li>
          <Link
            to='https://www.nytimes.com/2022/01/25/podcasts/transcript-ezra-klein-interviews-ruth-ozeki.html'
            target='_blank'
          >
            Ezra Klein interviews Ruth Ozeki
          </Link>
        </li>
        <li>
          <Link
            to='https://www.youtube.com/watch?v=-rjMwSTeVeo'
            target='_blank'
          >
            Stop Making Sense
          </Link>
        </li>
        <li>
          <Link
            to='https://alanwatts.com/products/the-way-of-zen'
            target='_blank'
          >
            <i>The Way Of Zen</i> by Alan Watts
          </Link>
        </li>
      </ul>
      <div className='space-y-4'>
        <div>
          <img
            src='/asparagus.png'
            className='w-full max-w-2xl mx-auto'
            alt='asparagus'
          />
        </div>
        <div>
          <img
            src='/celmins-web.png'
            className='w-full max-w-2xl mx-auto'
            alt='celmins web'
          />
        </div>
        <div>
          <img
            src='/ginger.png'
            className='w-full max-w-2xl mx-auto'
            alt='ginger'
          />
        </div>
        <div>
          <img
            src='/make-believe-mushrooms.png'
            className='w-full max-w-2xl mx-auto'
            alt='make believe mushrooms'
          />
        </div>
        <div>
          <img
            src='/mycorrhizal.png'
            className='w-full max-w-2xl mx-auto'
            alt='mycorrhizal'
          />
        </div>
        <div>
          <img
            src='/taproot.png'
            className='w-full max-w-2xl mx-auto'
            alt='taproot'
          />
        </div>
        <div>
          <img
            src='/willow-seeds.png'
            className='w-full max-w-2xl mx-auto'
            alt='willow seeds'
          />
        </div>
      </div>
    </main>
  );
}
