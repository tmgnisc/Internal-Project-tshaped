
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard';

const products = [
    {
        id: "1",
        page: "/pricing",
        keyword: "ahrefs alternative",
        position: "4",
        cluster: "Bottom-funnel",
        pbg: "success.main",
        traffic: "3.9k",
    },
    {
        id: "2",
        page: "/blog/keyword-research",
        keyword: "keyword research template",
        position: "7",
        cluster: "Mid-funnel",
        pbg: "primary.main",
        traffic: "2.4k",
    },
    {
        id: "3",
        page: "/guides/site-audit",
        keyword: "site audit checklist",
        position: "12",
        cluster: "Top-funnel",
        pbg: "secondary.main",
        traffic: "1.8k",
    },
    {
        id: "4",
        page: "/blog/backlink-analysis",
        keyword: "backlink checker",
        position: "18",
        cluster: "Top-funnel",
        pbg: "warning.main",
        traffic: "1.1k",
    },
];


const ProductPerformance = () => {
    return (

        <DashboardCard title="Top Pages & Keywords">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    #
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Page
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Keyword
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Cluster
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Pos / Traffic
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {product.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={600}>
                                        {product.page}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.keyword}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            px: "4px",
                                            backgroundColor: product.pbg,
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={product.cluster}
                                    ></Chip>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="subtitle2" fontWeight={600}>#{product.position}</Typography>
                                    <Typography variant="caption" color="textSecondary">{product.traffic} / mo</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default ProductPerformance;
