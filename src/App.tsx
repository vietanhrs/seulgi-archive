import {
  ActionIcon,
  Anchor,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  SegmentedControl,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core'
import {
  IconArrowUpRight,
  IconBrandInstagram,
  IconBrandSpotify,
  IconBrandYoutube,
  IconChartArcs3,
  IconMicrophone2,
  IconMoonStars,
  IconSparkles,
  IconSun,
  IconUserStar,
  IconWorldWww,
} from '@tabler/icons-react'
import image1 from './assets/seulgi/image-1.jpg'
import image2 from './assets/seulgi/image-2.png'
import image3 from './assets/seulgi/image-3.jpg'
import image4 from './assets/seulgi/image-4.jpg'
import './App.css'

const galleryImages = [
  {
    src: image1,
    alt: 'Kang Seulgi at LONGCHAMP in 2024',
    note: 'Editorial elegance',
  },
  {
    src: image2,
    alt: 'Kang Seulgi portrait in 2021',
    note: 'Soft charisma',
  },
  {
    src: image3,
    alt: 'Kang Seulgi performing at Dream Concert 2018',
    note: 'Stage power',
  },
  {
    src: image4,
    alt: 'Seulgi at Incheon International Airport in 2024',
    note: 'Airport chic',
  },
]

const socialLinks = [
  {
    icon: IconBrandInstagram,
    title: 'Instagram',
    href: 'https://www.instagram.com/hi_sseulgi/',
    description: 'Fashion, behind-the-scenes moments, and Seulgi’s everyday visual diary.',
  },
  {
    icon: IconBrandYoutube,
    title: 'Hi Seulgi YouTube',
    href: 'https://www.youtube.com/@hi_sseulgi_',
    description: 'Vlogs, styling, artistry, and the softer creative side of her world.',
  },
  {
    icon: IconBrandSpotify,
    title: 'Spotify',
    href: 'https://open.spotify.com/artist/5dvw46qKQe3fQWZOUikzW0',
    description: 'Listen to 28 Reasons and a voice that balances velvet warmth with sharp emotion.',
  },
  {
    icon: IconWorldWww,
    title: 'Wikipedia',
    href: 'https://en.wikipedia.org/wiki/Kang_Seul-gi',
    description: 'A quick guide to her career across Red Velvet, sub-units, solo work, and beyond.',
  },
]

const highlights = [
  {
    icon: IconUserStar,
    title: 'Main dancer energy',
    description: 'Precise, feline, and magnetic — Seulgi turns choreography into storytelling.',
  },
  {
    icon: IconMicrophone2,
    title: 'Distinct vocal tone',
    description: 'A husky warmth that makes even quieter moments feel intimate and cinematic.',
  },
  {
    icon: IconSparkles,
    title: 'Fashion muse aura',
    description: 'She moves between playful, experimental, and luxury editorial without losing herself.',
  },
  {
    icon: IconChartArcs3,
    title: 'Art-first identity',
    description: 'Her solo era feels curated: performance, visuals, and mood all moving as one.',
  },
]

const stats = [
  { value: '2014', label: 'Red Velvet debut' },
  { value: '28', label: 'Reasons for her solo era' },
  { value: '4', label: 'signature moods on this site' },
]

function App() {
  const { colorScheme, setColorScheme, clearColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true })

  const controlValue = colorScheme === 'auto' ? 'system' : colorScheme

  const handleThemeChange = (value: string) => {
    if (value === 'system') {
      clearColorScheme()
      return
    }

    setColorScheme(value === 'light' ? 'light' : 'dark')
  }

  return (
    <main id="top" className="app-shell" data-mode={computedColorScheme}>
      <div className="app-shell__backdrop" />
      <header className="topbar-shell">
        <div className="topbar-shell__inner">
          <div className="topbar">
            <Group justify="space-between" align="center" wrap="wrap" gap="md">
              <div className="topbar__title-wrap">
                <Badge variant="light" color="orange" radius="xl" className="eyebrow-badge">
                  Seulgi fansite concept
                </Badge>
                <Title order={2} className="topbar__title">
                  Seulgi Archive
                </Title>
                <Text className="topbar__caption">K-pop elegance • performance heat • sunset editorial mood</Text>
              </div>

              <Group gap="sm" align="center" className="topbar__controls">
                <ThemeIcon variant="light" size={38} radius="xl" color={computedColorScheme === 'dark' ? 'orange' : 'grape'}>
                  {computedColorScheme === 'dark' ? <IconMoonStars size={18} /> : <IconSun size={18} />}
                </ThemeIcon>
                <SegmentedControl
                  radius="xl"
                  value={controlValue}
                  onChange={handleThemeChange}
                  data={[
                    { label: 'System', value: 'system' },
                    { label: 'Light', value: 'light' },
                    { label: 'Dark', value: 'dark' },
                  ]}
                  className="theme-switcher"
                />
              </Group>
            </Group>
          </div>
        </div>
      </header>

      <Container size="xl" className="app-shell__container">
        <Stack gap="3rem">
          <section className="hero-panel">
            <Grid align="center">
              <Grid.Col span={{ base: 12, lg: 7 }}>
                <Stack gap="xl">
                  <div>
                    <Text className="hero-kicker">강슬기 • Kang Seulgi</Text>
                    <Title order={1} className="hero-title">
                      A fansite built for Seulgi’s artful warmth, stage power, and unmistakable cool.
                    </Title>
                    <Text className="hero-copy">
                      This concept leans into Seulgi’s duality: graceful but sharp, playful but composed,
                      soft around the edges yet unforgettable under the spotlight. It’s meant to feel like a
                      premium K-pop editorial rather than a generic profile page.
                    </Text>
                  </div>

                  <Group gap="md" wrap="wrap">
                    <Button component="a" href="#gallery" radius="xl" size="lg" className="cta-primary">
                      Explore the gallery
                    </Button>
                    <Button
                      component="a"
                      href="#socials"
                      variant="default"
                      radius="xl"
                      size="lg"
                      className="cta-secondary"
                    >
                      Open socials
                    </Button>
                  </Group>

                  <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
                    {stats.map((item) => (
                      <Card key={item.label} radius="24px" padding="lg" className="stat-card">
                        <Text className="stat-card__value">{item.value}</Text>
                        <Text className="stat-card__label">{item.label}</Text>
                      </Card>
                    ))}
                  </SimpleGrid>
                </Stack>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 5 }}>
                <div className="hero-visual">
                  <div className="hero-visual__halo hero-visual__halo--one" />
                  <div className="hero-visual__halo hero-visual__halo--two" />

                  <Card radius="32px" padding="0" className="hero-image-card hero-image-card--main">
                    <Image src={galleryImages[0].src} alt={galleryImages[0].alt} className="hero-image" />
                    <div className="hero-image-card__overlay">
                      <Text className="hero-image-card__eyebrow">Current mood</Text>
                      <Text className="hero-image-card__title">Sunset luxury, quiet confidence</Text>
                    </div>
                  </Card>

                  <Card radius="28px" padding="lg" className="hero-quote-card">
                    <Text className="hero-quote-card__label">Why this vibe works</Text>
                    <Text className="hero-quote-card__body">
                      Seulgi always feels like contrast done right — velvet softness with sharp edges, restraint
                      with intensity, sweetness with command.
                    </Text>
                  </Card>
                </div>
              </Grid.Col>
            </Grid>
          </section>

          <section id="socials" className="content-section">
            <Group justify="space-between" align="end" gap="md" mb="lg">
              <div>
                <Text className="section-kicker">Social orbit</Text>
                <Title order={2} className="section-title">
                  Follow the official channels and keep the archive connected.
                </Title>
              </div>
              <Text className="section-caption">A clean launchpad for content, music, and updates.</Text>
            </Group>

            <SimpleGrid cols={{ base: 1, md: 2, xl: 4 }} spacing="lg">
              {socialLinks.map(({ icon: Icon, title, href, description }) => (
                <Anchor key={title} href={href} target="_blank" rel="noreferrer" className="social-link-card">
                  <Card radius="28px" padding="xl" className="social-card">
                    <Group justify="space-between" align="start" mb="xl">
                      <ThemeIcon variant="light" radius="xl" size={48} color="orange">
                        <Icon size={24} />
                      </ThemeIcon>
                      <ActionIcon variant="subtle" color="gray" radius="xl" aria-label={`Open ${title}`}>
                        <IconArrowUpRight size={18} />
                      </ActionIcon>
                    </Group>
                    <Title order={3} className="social-card__title">
                      {title}
                    </Title>
                    <Text className="social-card__copy">{description}</Text>
                  </Card>
                </Anchor>
              ))}
            </SimpleGrid>
          </section>

          <section id="gallery" className="content-section gallery-section">
            <Group justify="space-between" align="end" gap="md" mb="lg">
              <div>
                <Text className="section-kicker">Visual archive</Text>
                <Title order={2} className="section-title">
                  A small curated gallery of Seulgi’s most striking moods.
                </Title>
              </div>
              <Text className="section-caption">Performance heat, editorial softness, and signature poise.</Text>
            </Group>

            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <Card key={image.src} radius="30px" padding="0" className={`gallery-card gallery-card--${index + 1}`}>
                  <Image src={image.src} alt={image.alt} className="gallery-card__image" />
                  <div className="gallery-card__overlay">
                    <Text className="gallery-card__note">{image.note}</Text>
                    <Text className="gallery-card__alt">{image.alt}</Text>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="content-section">
            <Group justify="space-between" align="end" gap="md" mb="lg">
              <div>
                <Text className="section-kicker">What makes her magnetic</Text>
                <Title order={2} className="section-title">
                  Built around Seulgi’s strongest creative signatures.
                </Title>
              </div>
              <Text className="section-caption">The parts fans feel instantly, even before they can explain them.</Text>
            </Group>

            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
              {highlights.map(({ icon: Icon, title, description }) => (
                <Card key={title} radius="28px" padding="xl" className="highlight-card">
                  <Group align="start" gap="md" wrap="nowrap">
                    <ThemeIcon variant="light" radius="xl" size={50} color="grape">
                      <Icon size={24} />
                    </ThemeIcon>
                    <div>
                      <Title order={3} className="highlight-card__title">
                        {title}
                      </Title>
                      <Text className="highlight-card__copy">{description}</Text>
                    </div>
                  </Group>
                </Card>
              ))}
            </SimpleGrid>
          </section>

          <section className="closing-panel">
            <Card radius="36px" padding="clamp(1.5rem, 3vw, 2.5rem)" className="closing-card">
              <Grid align="center">
                <Grid.Col span={{ base: 12, lg: 7 }}>
                  <Text className="section-kicker">Fan note</Text>
                  <Title order={2} className="closing-card__title">
                    Designed to feel like Seulgi herself: expressive, polished, and impossible to ignore.
                  </Title>
                  <Text className="closing-card__copy">
                    This can grow into a full archive with eras, favorite stages, interviews, styling boards,
                    and handwritten fan essays. For now, it already sets the tone: warm, chic, and deeply
                    performance-driven.
                  </Text>
                </Grid.Col>
                <Grid.Col span={{ base: 12, lg: 5 }}>
                  <Stack gap="md">
                    <Box className="closing-card__pill">Future add-ons: timeline • discography • stage notes • fan essays</Box>
                    <Divider color="var(--panel-border)" />
                    <Group gap="md" wrap="wrap">
                      <Button component="a" href="https://www.smtown.com/artist/musician/10014" target="_blank" rel="noreferrer" radius="xl" className="cta-primary">
                        Visit official profile
                      </Button>
                      <Button component="a" href="#top" variant="subtle" radius="xl" className="back-link">
                        Back to top
                      </Button>
                    </Group>
                  </Stack>
                </Grid.Col>
              </Grid>
            </Card>
          </section>
        </Stack>
      </Container>
    </main>
  )
}

export default App
