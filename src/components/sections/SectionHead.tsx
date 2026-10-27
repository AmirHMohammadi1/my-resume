interface Props {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
  /** Heading level: sections use h2; a standalone page (blog index) uses h1. */
  as?: 'h1' | 'h2';
}

export function SectionHead({ eyebrow, title, intro, id, as: Tag = 'h2' }: Props) {
  return (
    <div className="section__head reveal">
      <span className="eyebrow">{eyebrow}</span>
      <Tag className="section__title" id={id}>
        {title}
      </Tag>
      {intro ? <p className="section__intro">{intro}</p> : null}
    </div>
  );
}
