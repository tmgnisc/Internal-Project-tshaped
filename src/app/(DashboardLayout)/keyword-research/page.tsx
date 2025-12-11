'use client'
import { useMemo, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Box, Stack, Typography, Button, TextField, Select, MenuItem, Divider, Chip, LinearProgress, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { IconSparkles, IconUpload, IconSearch, IconGlobe, IconArrowUpRight } from '@tabler/icons-react';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const countries = [
  { code: 'NZ', label: 'New Zealand' },
  { code: 'US', label: 'United States' },
  { code: 'GB', label: 'United Kingdom' },
  { code: 'AU', label: 'Australia' },
  { code: 'CA', label: 'Canada' },
];

const KeywordResearchPage = () => {
  const [keywords, setKeywords] = useState('');
  const [country, setCountry] = useState('NZ');
  const [showResults, setShowResults] = useState(false);

  const primaryTerm = useMemo(() => {
    const first = keywords.split(/[\n,]/).map((s) => s.trim()).filter(Boolean)[0];
    return first || 'sample term';
  }, [keywords]);

  const handleSearch = () => {
    setShowResults(true);
  };

  const serpRows = [
    { idx: 1, title: 'Momo Challenge hoax', url: 'https://en.wikipedia.org/wiki/Momo_Challenge_hoax', words: 4764, dr: 97, ur: 9, backlinks: 706, domains: 365, traffic: 1223, value: '$98', keywords: 10, topKeyword: primaryTerm, volume: '11K' },
    { idx: 3, title: 'What parents need to know about the momo ...', url: 'https://www.larwood.herts.sch.uk/news/?pid=3&nid=4&storyid=122', words: 0, dr: 8, ur: 0, backlinks: 64, domains: 51, traffic: 737, value: '$62', keywords: 7, topKeyword: primaryTerm, volume: '11K' },
    { idx: 4, title: 'The Momo Challenge: What schools need to know', url: 'https://www.linewize.io/blog/the-momo-challenge-what-schools-need-to-know', words: 2070, dr: 30, ur: 5, backlinks: 0, domains: 0, traffic: 594, value: '$49', keywords: 3, topKeyword: primaryTerm, volume: '11K' },
    { idx: 5, title: 'MHF statement on the Momo Challenge', url: 'https://mentalhealth.org.nz/news/post/mhf-statement-on-the-momo-challenge', words: 2702, dr: 76, ur: 4, backlinks: 0, domains: 0, traffic: 454, value: '$39', keywords: 2, topKeyword: primaryTerm, volume: '11K' },
    { idx: 6, title: "Momo challenge: 'Freaky game' described as hoax", url: 'https://www.bbc.com/news/uk-northern-ireland-47359623', words: 1043, dr: 93, ur: 5, backlinks: 103, domains: 46, traffic: 351, value: '$32', keywords: 2, topKeyword: primaryTerm, volume: '11K' },
    { idx: 8, title: 'Momo is as Real as We’ve Made Her', url: 'https://www.nytimes.com/2019/03/02/style/momo-mania-hoax.html', words: 1189, dr: 94, ur: 5, backlinks: 418, domains: 266, traffic: 231, value: '$20', keywords: 5, topKeyword: primaryTerm, volume: '11K' },
    { idx: 9, title: 'Momo (food)', url: 'https://en.wikipedia.org/wiki/Momo_(food)', words: 3347, dr: 97, ur: 13, backlinks: 1730, domains: 358, traffic: 230, value: '$15', keywords: 11, topKeyword: primaryTerm, volume: '11K' },
  ];

  return (
    <PageContainer title="Keyword Research" description="Explore keywords with volume, difficulty, and traffic potential">
      <Box>
        <DashboardCard title="Keywords Explorer" subtitle="Modeled after Ahrefs — type keywords, choose country, search">
          <Stack spacing={3}>
            <Box
              sx={{
                bgcolor: 'background.paper',
                borderRadius: 2,
                p: { xs: 2, md: 3 },
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Stack spacing={2}>
                <Typography variant="body2" color="textSecondary">
                  Enter keywords separated by commas or new lines (shift + enter)
                </Typography>
                <TextField
                  multiline
                  minRows={6}
                  placeholder="e.g. backlink checker, keyword research template, ahrefs alternative"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  fullWidth
                  InputProps={{
                    sx: {
                      bgcolor: 'background.default',
                      color: 'text.primary',
                      borderRadius: 2,
                      '& .MuiOutlinedInput-notchedOutline': { borderColor: 'divider' },
                      '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.light' },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },
                    },
                  }}
                />

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ xs: 'stretch', md: 'center' }}>
                  <Button
                    startIcon={<IconSparkles size={18} />}
                    sx={{ color: 'text.primary' }}
                    variant="text"
                  >
                    Ask AI to suggest seed keywords
                  </Button>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ flex: 1 }}>
                    <Button
                      startIcon={<IconUpload size={16} />}
                      variant="outlined"
                      sx={{
                        color: 'text.primary',
                        borderColor: 'divider',
                        '&:hover': { borderColor: 'primary.light' },
                      }}
                    >
                      CSV or TXT
                    </Button>
                    <Divider flexItem orientation="vertical" />
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ flex: 1, justifyContent: 'flex-end' }}>
                      <Select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        size="small"
                        sx={{
                          minWidth: 160,
                          color: 'text.primary',
                          '.MuiOutlinedInput-notchedOutline': { borderColor: 'divider' },
                          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.light' },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },
                        }}
                      >
                        {countries.map((c) => (
                          <MenuItem key={c.code} value={c.code}>
                            {c.label}
                          </MenuItem>
                        ))}
                      </Select>
                      <Button
                        variant="contained"
                        startIcon={<IconSearch size={16} />}
                        sx={{ minWidth: 120 }}
                        onClick={handleSearch}
                      >
                        Search
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </DashboardCard>

        {showResults && (
          <Stack spacing={3} mt={3}>
            <Typography variant="h5" fontWeight={700}>
              Overview: {primaryTerm}
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Keyword Difficulty
                  </Typography>
                  <Typography variant="h3" fontWeight={700} mt={1}>
                    63
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Hard — ~148 ref. domains to rank in top 10
                  </Typography>
                  <LinearProgress variant="determinate" value={63} sx={{ mt: 2 }} />
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Search volume
                  </Typography>
                  <Typography variant="h4" fontWeight={700} mt={1}>
                    11K
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {country} • Growth · Forecast
                  </Typography>
                  <Stack direction="row" spacing={2} mt={2}>
                    <Chip label="Clicks 5.3K" size="small" />
                    <Chip label="CPC $0.09" size="small" />
                    <Chip label="CPS 0.48" size="small" />
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Traffic Potential
                  </Typography>
                  <Typography variant="h4" fontWeight={700} mt={1}>
                    1.2K
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Value $98
                  </Typography>
                  <Stack spacing={1} mt={2}>
                    <Typography variant="body2">Top ranking result</Typography>
                    <Typography variant="subtitle2" color="primary">
                      {primaryTerm} overview page
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      Parent topic: {primaryTerm}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconGlobe size={18} />
                    <Typography variant="subtitle2" color="textSecondary">
                      Global search volume
                    </Typography>
                  </Stack>
                  <Typography variant="h4" fontWeight={700} mt={1}>
                    3.9M
                  </Typography>
                  <Stack spacing={1} mt={2}>
                    {[
                      ['United States', '768K'],
                      ['Taiwan', '1.0M'],
                      ['Brazil', '196K'],
                      ['Turkey', '152K'],
                      ['India', '149K'],
                    ].map(([loc, vol]) => (
                      <Stack key={loc} direction="row" justifyContent="space-between">
                        <Typography variant="body2">{loc}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          {vol}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Paper>
              </Grid>
            </Grid>

            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography variant="h6" mb={2}>
                Keyword ideas
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={3}>
                  <Typography variant="subtitle2" color="textSecondary" mb={1}>
                    Terms match
                  </Typography>
                  <Table size="small">
                    <TableBody>
                      {['momo', 'momo sushi', 'momo ayase', 'momo tea howick', 'momo steering wheel'].map((k, idx) => (
                        <TableRow key={k}>
                          <TableCell sx={{ border: 0, pl: 0 }}>{k}</TableCell>
                          <TableCell align="right" sx={{ border: 0 }}>{[11, 0.7, 0.45, 0.35, 0.3][idx]}K</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <Typography variant="subtitle2" color="textSecondary" mb={1}>
                    Questions
                  </Typography>
                  <Table size="small">
                    <TableBody>
                      {[
                        'is momo real',
                        'what is momo',
                        'what are momo twins',
                        'what is momo food',
                        'who is momo',
                      ].map((k, idx) => (
                        <TableRow key={k}>
                          <TableCell sx={{ border: 0, pl: 0 }}>{k}</TableCell>
                          <TableCell align="right" sx={{ border: 0 }}>{[50, 40, 30, 20, 20][idx]}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <Typography variant="subtitle2" color="textSecondary" mb={1}>
                    Also rank for
                  </Typography>
                  <Table size="small">
                    <TableBody>
                      {[
                        'momo',
                        'youtube kids',
                        'momos',
                        'momo steering wheel',
                        'momo challenge',
                      ].map((k, idx) => (
                        <TableRow key={k}>
                          <TableCell sx={{ border: 0, pl: 0 }}>{k}</TableCell>
                          <TableCell align="right" sx={{ border: 0 }}>{[11, 4.3, 0.45, 0.3, 0.25][idx]}K</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <Typography variant="subtitle2" color="textSecondary" mb={1}>
                    Also talk about
                  </Typography>
                  <Table size="small">
                    <TableBody>
                      {['youtube', 'peppa pig', 'kim kardashian', 'momo', 'game'].map((k, idx) => (
                        <TableRow key={k}>
                          <TableCell sx={{ border: 0, pl: 0 }}>{k}</TableCell>
                          <TableCell align="right" sx={{ border: 0 }}>{[542, 20, 12, 11, 7.5][idx]}K</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
              </Grid>
              <Button endIcon={<IconArrowUpRight size={16} />} sx={{ mt: 1 }} variant="text">
                View full keyword ideas
              </Button>
            </Paper>

            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography variant="h6" mb={2}>
                SERP overview for “{primaryTerm}”
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ width: 30 }}>#</TableCell>
                    <TableCell>URL</TableCell>
                    <TableCell align="right">Words</TableCell>
                    <TableCell align="right">DR</TableCell>
                    <TableCell align="right">UR</TableCell>
                    <TableCell align="right">Backlinks</TableCell>
                    <TableCell align="right">Domains</TableCell>
                    <TableCell align="right">Traffic</TableCell>
                    <TableCell align="right">Value</TableCell>
                    <TableCell align="right">Keywords</TableCell>
                    <TableCell align="right">Top keyword</TableCell>
                    <TableCell align="right">Volume</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {serpRows.map((row) => (
                    <TableRow key={row.url}>
                      <TableCell sx={{ width: 30 }}>{row.idx}</TableCell>
                      <TableCell>
                        <Stack spacing={0.5}>
                          <Typography variant="subtitle2">{row.title}</Typography>
                          <Typography variant="caption" color="textSecondary">
                            {row.url}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell align="right">{row.words || '—'}</TableCell>
                      <TableCell align="right">{row.dr}</TableCell>
                      <TableCell align="right">{row.ur}</TableCell>
                      <TableCell align="right">{row.backlinks}</TableCell>
                      <TableCell align="right">{row.domains}</TableCell>
                      <TableCell align="right">{row.traffic}</TableCell>
                      <TableCell align="right">{row.value}</TableCell>
                      <TableCell align="right">{row.keywords}</TableCell>
                      <TableCell align="right">{row.topKeyword}</TableCell>
                      <TableCell align="right">{row.volume}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Stack>
        )}
      </Box>
    </PageContainer>
  );
};

export default KeywordResearchPage;



