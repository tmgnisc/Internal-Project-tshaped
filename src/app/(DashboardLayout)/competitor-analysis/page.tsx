'use client'
import { useMemo, useState } from 'react';
import {
  Box,
  Stack,
  Typography,
  Button,
  Paper,
  TextField,
  Select,
  MenuItem,
  Divider,
  Chip,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

type CompetitorRow = { id: number; value: string; scope: string };

const scopeOptions = ['Subdomains', 'Domains', 'Prefix', 'URL'];
const modes = ['keywords', 'referring domains', 'referring pages'];
const maxCompetitors = 10;

const CompetitorAnalysisPage = () => {
  const [mode, setMode] = useState<string>('keywords');
  const [target, setTarget] = useState('');
  const [targetScope, setTargetScope] = useState<string>('Subdomains');
  const [competitors, setCompetitors] = useState<CompetitorRow[]>([
    { id: 1, value: '', scope: 'Subdomains' },
    { id: 2, value: '', scope: 'Subdomains' },
    { id: 3, value: '', scope: 'Subdomains' },
  ]);

  const canAdd = useMemo(() => competitors.length < maxCompetitors, [competitors.length]);
  const [showResults, setShowResults] = useState(false);

  const rows = [
    { keyword: 'waipu caves', sf: 4, volume: '2.9K', kd: 0, cpc: 0.38, serp: 'SERP', targetPos: '—', targetTraffic: '—', compPos: '8', compTraffic: '38', updated: '6 d ago' },
    { keyword: 'things to do in raglan', sf: 4, volume: '1.0K', kd: 0, cpc: 0.13, serp: 'SERP', targetPos: '—', targetTraffic: '—', compPos: '8', compTraffic: '0', updated: '25 Nov 2025' },
    { keyword: 'napier to wellington', sf: 2, volume: '900', kd: 0, cpc: 0.12, serp: 'SERP', targetPos: '—', targetTraffic: '—', compPos: '6', compTraffic: '9', updated: '25 Nov 2025' },
    { keyword: 'auckland walks', sf: 3, volume: '800', kd: 0, cpc: 0.19, serp: 'SERP', targetPos: '—', targetTraffic: '—', compPos: '7', compTraffic: '60', updated: '28 Nov 2025' },
    { keyword: 'caluzzi', sf: 2, volume: '600', kd: 0, cpc: 0.17, serp: 'SERP', targetPos: '—', targetTraffic: '—', compPos: '6', compTraffic: '0', updated: '19 Nov 2025' },
  ];

  const filters = [
    { label: "Target's position: No rank" },
    { label: "Competitors' positions: All in top 10" },
  ];

  const updateCompetitor = (id: number, key: 'value' | 'scope', val: string) => {
    setCompetitors((prev) => prev.map((row) => (row.id === id ? { ...row, [key]: val } : row)));
  };

  const addCompetitor = () => {
    if (!canAdd) return;
    setCompetitors((prev) => [...prev, { id: Date.now(), value: '', scope: 'Subdomains' }]);
  };

  return (
    <PageContainer title="Competitive Analysis" description="Analyze competitors' websites compared to yours.">
      <Box>
        <DashboardCard
          title={
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="h5">Competitive Analysis</Typography>
            </Stack>
          }
          subtitle="Find opportunities your competitors rank for"
        >
          <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 }, bgcolor: 'background.paper' }}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                <Typography variant="body2">Show</Typography>
                {modes.map((m) => (
                  <Chip
                    key={m}
                    label={m}
                    color={mode === m ? 'primary' : 'default'}
                    variant={mode === m ? 'filled' : 'outlined'}
                    onClick={() => setMode(m)}
                    sx={{ textTransform: 'capitalize' }}
                  />
                ))}
              </Stack>

              <Stack spacing={1}>
                <Typography variant="body2" color="textSecondary">
                  This target doesn’t rank for
                </Typography>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={1}>
                  <TextField
                    fullWidth
                    placeholder="Domain or URL"
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                  />
                  <Select
                    value={targetScope}
                    onChange={(e) => setTargetScope(e.target.value as string)}
                    sx={{ minWidth: 150 }}
                  >
                    {scopeOptions.map((opt) => (
                      <MenuItem key={opt} value={opt}>
                        {opt}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Stack>

              <Stack spacing={1}>
                <Typography variant="body2" color="textSecondary">
                  But these competitors do
                </Typography>
                <Stack spacing={1}>
                  {competitors.map((row, idx) => (
                    <Stack key={row.id} direction={{ xs: 'column', md: 'row' }} spacing={1}>
                      <TextField
                        fullWidth
                        placeholder={idx === 0 ? 'Domain or URL' : 'Competitor domain or URL'}
                        value={row.value}
                        onChange={(e) => updateCompetitor(row.id, 'value', e.target.value)}
                      />
                      <Select
                        value={row.scope}
                        onChange={(e) => updateCompetitor(row.id, 'scope', e.target.value as string)}
                        sx={{ minWidth: 150 }}
                      >
                        {scopeOptions.map((opt) => (
                          <MenuItem key={opt} value={opt}>
                            {opt}
                          </MenuItem>
                        ))}
                      </Select>
                    </Stack>
                  ))}
                </Stack>
                <Button
                  variant="text"
                  startIcon={<span style={{ fontWeight: 700 }}>+</span>}
                  sx={{ alignSelf: 'flex-start' }}
                  onClick={addCompetitor}
                  disabled={!canAdd}
                >
                  Add Competitor
                </Button>
              </Stack>

              <Divider />

              <Button variant="contained" size="large" sx={{ alignSelf: 'flex-start' }} onClick={() => setShowResults(true)}>
                Show opportunities
              </Button>
            </Stack>
          </Paper>
        </DashboardCard>

        {showResults && (
          <Box mt={3}>
            <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 }, bgcolor: 'background.paper' }}>
              <Stack spacing={2}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} alignItems={{ md: 'center' }}>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {filters.map((f) => (
                      <Chip key={f.label} label={f.label} color="primary" variant="outlined" />
                    ))}
                  </Stack>
                  <Chip label="Main positions only" variant="outlined" sx={{ ml: { md: 'auto' } }} />
                </Stack>

                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Keyword</TableCell>
                      <TableCell align="right">SF</TableCell>
                      <TableCell align="right">Volume</TableCell>
                      <TableCell align="right">KD</TableCell>
                      <TableCell align="right">CPC</TableCell>
                      <TableCell align="right">SERP</TableCell>
                      <TableCell align="right">Your pos</TableCell>
                      <TableCell align="right">Your traffic</TableCell>
                      <TableCell align="right">Comp pos</TableCell>
                      <TableCell align="right">Comp traffic</TableCell>
                      <TableCell align="right">Updated</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.keyword} hover>
                        <TableCell>{row.keyword}</TableCell>
                        <TableCell align="right">{row.sf}</TableCell>
                        <TableCell align="right">{row.volume}</TableCell>
                        <TableCell align="right">{row.kd}</TableCell>
                        <TableCell align="right">{row.cpc}</TableCell>
                        <TableCell align="right">{row.serp}</TableCell>
                        <TableCell align="right">{row.targetPos}</TableCell>
                        <TableCell align="right">{row.targetTraffic}</TableCell>
                        <TableCell align="right">{row.compPos}</TableCell>
                        <TableCell align="right">{row.compTraffic}</TableCell>
                        <TableCell align="right">{row.updated}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Stack>
            </Paper>
          </Box>
        )}
      </Box>
    </PageContainer>
  );
};

export default CompetitorAnalysisPage;



