// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_Netmigration2020_4rule0_eval_expression(context) {
    // "2020" >= - 600 AND "2020" <= - 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2020']  >= - 600 ) && (feature.properties['2020']  <= - 500 ));
    } else {
        return ((feature['2020']  >= - 600 ) && (feature['2020']  <= - 500 ));
    }
}


function exp_Netmigration2020_4rule1_eval_expression(context) {
    // "2020" > - 500 AND "2020" <= - 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2020']  > - 500 ) && (feature.properties['2020']  <= - 400 ));
    } else {
        return ((feature['2020']  > - 500 ) && (feature['2020']  <= - 400 ));
    }
}


function exp_Netmigration2020_4rule2_eval_expression(context) {
    // "2020" > - 400 AND "2020" <= - 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2020']  > - 400 ) && (feature.properties['2020']  <= - 300 ));
    } else {
        return ((feature['2020']  > - 400 ) && (feature['2020']  <= - 300 ));
    }
}


function exp_Netmigration2020_4rule3_eval_expression(context) {
    // "2020" > - 300 AND "2020" <= - 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2020']  > - 300 ) && (feature.properties['2020']  <= - 200 ));
    } else {
        return ((feature['2020']  > - 300 ) && (feature['2020']  <= - 200 ));
    }
}


function exp_Netmigration2020_4rule4_eval_expression(context) {
    // "2020" > - 200 AND "2020" <= - 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2020']  > - 200 ) && (feature.properties['2020']  <= - 100 ));
    } else {
        return ((feature['2020']  > - 200 ) && (feature['2020']  <= - 100 ));
    }
}


function exp_Netmigration2020_4rule5_eval_expression(context) {
    // "2020" > - 100 AND "2020" <= 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2020']  > - 100 ) && (feature.properties['2020']  <= 0));
    } else {
        return ((feature['2020']  > - 100 ) && (feature['2020']  <= 0));
    }
}


function exp_Netmigration2020_4rule6_eval_expression(context) {
    // "2020" > 0 AND "2020" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2020']  > 0) && (feature.properties['2020']  <= 100));
    } else {
        return ((feature['2020']  > 0) && (feature['2020']  <= 100));
    }
}


function exp_Netmigration2020_4rule7_eval_expression(context) {
    // "2020" > 100 AND "2020" <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2020']  > 100) && (feature.properties['2020']  <= 200));
    } else {
        return ((feature['2020']  > 100) && (feature['2020']  <= 200));
    }
}


function exp_Netmigration2020_4rule8_eval_expression(context) {
    // "2020" > 200 AND "2020" <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2020']  > 200) && (feature.properties['2020']  <= 300));
    } else {
        return ((feature['2020']  > 200) && (feature['2020']  <= 300));
    }
}


function exp_Netmigration2020_4rule9_eval_expression(context) {
    // "2020" > 300 AND "2020" <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2020']  > 300) && (feature.properties['2020']  <= 400));
    } else {
        return ((feature['2020']  > 300) && (feature['2020']  <= 400));
    }
}


function exp_Netmigration2020_4rule10_eval_expression(context) {
    // "2020" > 600 AND "2020" <= 700

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2020']  > 600) && (feature.properties['2020']  <= 700));
    } else {
        return ((feature['2020']  > 600) && (feature['2020']  <= 700));
    }
}


function exp_Netmigration2020_4rule11_eval_expression(context) {
    // "2020" > 900 AND "2020" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2020']  > 900) && (feature.properties['2020']  <= 1000));
    } else {
        return ((feature['2020']  > 900) && (feature['2020']  <= 1000));
    }
}


function exp_Netmigration2020_4rule12_eval_expression(context) {
    // "2020" > 1100 AND "2020" <= 1200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2020']  > 1100) && (feature.properties['2020']  <= 1200));
    } else {
        return ((feature['2020']  > 1100) && (feature['2020']  <= 1200));
    }
}


function exp_Netmigration2020_4rule13_eval_expression(context) {
    // "2020" > 1300 AND "2020" <= 1400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2020']  > 1300) && (feature.properties['2020']  <= 1400));
    } else {
        return ((feature['2020']  > 1300) && (feature['2020']  <= 1400));
    }
}


function exp_Netmigration2020_4rule14_eval_expression(context) {
    // "2020" > 1500 AND "2020" <= 1600

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2020']  > 1500) && (feature.properties['2020']  <= 1600));
    } else {
        return ((feature['2020']  > 1500) && (feature['2020']  <= 1600));
    }
}


function exp_Netmigration2019_5rule0_eval_expression(context) {
    // "2019" >= - 600 AND "2019" <= - 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2019']  >= - 600 ) && (feature.properties['2019']  <= - 500 ));
    } else {
        return ((feature['2019']  >= - 600 ) && (feature['2019']  <= - 500 ));
    }
}


function exp_Netmigration2019_5rule1_eval_expression(context) {
    // "2019" > - 500 AND "2019" <= - 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2019']  > - 500 ) && (feature.properties['2019']  <= - 400 ));
    } else {
        return ((feature['2019']  > - 500 ) && (feature['2019']  <= - 400 ));
    }
}


function exp_Netmigration2019_5rule2_eval_expression(context) {
    // "2019" > - 400 AND "2019" <= - 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2019']  > - 400 ) && (feature.properties['2019']  <= - 300 ));
    } else {
        return ((feature['2019']  > - 400 ) && (feature['2019']  <= - 300 ));
    }
}


function exp_Netmigration2019_5rule3_eval_expression(context) {
    // "2019" > - 300 AND "2019" <= - 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2019']  > - 300 ) && (feature.properties['2019']  <= - 200 ));
    } else {
        return ((feature['2019']  > - 300 ) && (feature['2019']  <= - 200 ));
    }
}


function exp_Netmigration2019_5rule4_eval_expression(context) {
    // "2019" > - 200 AND "2019" <= - 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2019']  > - 200 ) && (feature.properties['2019']  <= - 100 ));
    } else {
        return ((feature['2019']  > - 200 ) && (feature['2019']  <= - 100 ));
    }
}


function exp_Netmigration2019_5rule5_eval_expression(context) {
    // "2019" > - 100 AND "2019" <= 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2019']  > - 100 ) && (feature.properties['2019']  <= 0));
    } else {
        return ((feature['2019']  > - 100 ) && (feature['2019']  <= 0));
    }
}


function exp_Netmigration2019_5rule6_eval_expression(context) {
    // "2019" > 0 AND "2019" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2019']  > 0) && (feature.properties['2019']  <= 100));
    } else {
        return ((feature['2019']  > 0) && (feature['2019']  <= 100));
    }
}


function exp_Netmigration2019_5rule7_eval_expression(context) {
    // "2019" > 100 AND "2019" <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2019']  > 100) && (feature.properties['2019']  <= 200));
    } else {
        return ((feature['2019']  > 100) && (feature['2019']  <= 200));
    }
}


function exp_Netmigration2019_5rule8_eval_expression(context) {
    // "2019" > 200 AND "2019" <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2019']  > 200) && (feature.properties['2019']  <= 300));
    } else {
        return ((feature['2019']  > 200) && (feature['2019']  <= 300));
    }
}


function exp_Netmigration2019_5rule9_eval_expression(context) {
    // "2019" > 300 AND "2019" <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2019']  > 300) && (feature.properties['2019']  <= 400));
    } else {
        return ((feature['2019']  > 300) && (feature['2019']  <= 400));
    }
}


function exp_Netmigration2019_5rule10_eval_expression(context) {
    // "2019" > 600 AND "2019" <= 700

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2019']  > 600) && (feature.properties['2019']  <= 700));
    } else {
        return ((feature['2019']  > 600) && (feature['2019']  <= 700));
    }
}


function exp_Netmigration2019_5rule11_eval_expression(context) {
    // "2019" > 900 AND "2019" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2019']  > 900) && (feature.properties['2019']  <= 1000));
    } else {
        return ((feature['2019']  > 900) && (feature['2019']  <= 1000));
    }
}


function exp_Netmigration2019_5rule12_eval_expression(context) {
    // "2019" > 1100 AND "2019" <= 1200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2019']  > 1100) && (feature.properties['2019']  <= 1200));
    } else {
        return ((feature['2019']  > 1100) && (feature['2019']  <= 1200));
    }
}


function exp_Netmigration2019_5rule13_eval_expression(context) {
    // "2019" > 1300 AND "2019" <= 1400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2019']  > 1300) && (feature.properties['2019']  <= 1400));
    } else {
        return ((feature['2019']  > 1300) && (feature['2019']  <= 1400));
    }
}


function exp_Netmigration2019_5rule14_eval_expression(context) {
    // "2019" > 1500 AND "2019" <= 1600

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2019']  > 1500) && (feature.properties['2019']  <= 1600));
    } else {
        return ((feature['2019']  > 1500) && (feature['2019']  <= 1600));
    }
}


function exp_Netmigration2018_6rule0_eval_expression(context) {
    // "2018" >= - 600 AND "2018" <= - 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2018']  >= - 600 ) && (feature.properties['2018']  <= - 500 ));
    } else {
        return ((feature['2018']  >= - 600 ) && (feature['2018']  <= - 500 ));
    }
}


function exp_Netmigration2018_6rule1_eval_expression(context) {
    // "2018" > - 500 AND "2018" <= - 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2018']  > - 500 ) && (feature.properties['2018']  <= - 400 ));
    } else {
        return ((feature['2018']  > - 500 ) && (feature['2018']  <= - 400 ));
    }
}


function exp_Netmigration2018_6rule2_eval_expression(context) {
    // "2018" > - 400 AND "2018" <= - 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2018']  > - 400 ) && (feature.properties['2018']  <= - 300 ));
    } else {
        return ((feature['2018']  > - 400 ) && (feature['2018']  <= - 300 ));
    }
}


function exp_Netmigration2018_6rule3_eval_expression(context) {
    // "2018" > - 300 AND "2018" <= - 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2018']  > - 300 ) && (feature.properties['2018']  <= - 200 ));
    } else {
        return ((feature['2018']  > - 300 ) && (feature['2018']  <= - 200 ));
    }
}


function exp_Netmigration2018_6rule4_eval_expression(context) {
    // "2018" > - 200 AND "2018" <= - 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2018']  > - 200 ) && (feature.properties['2018']  <= - 100 ));
    } else {
        return ((feature['2018']  > - 200 ) && (feature['2018']  <= - 100 ));
    }
}


function exp_Netmigration2018_6rule5_eval_expression(context) {
    // "2018" > - 100 AND "2018" <= 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2018']  > - 100 ) && (feature.properties['2018']  <= 0));
    } else {
        return ((feature['2018']  > - 100 ) && (feature['2018']  <= 0));
    }
}


function exp_Netmigration2018_6rule6_eval_expression(context) {
    // "2018" > 0 AND "2018" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2018']  > 0) && (feature.properties['2018']  <= 100));
    } else {
        return ((feature['2018']  > 0) && (feature['2018']  <= 100));
    }
}


function exp_Netmigration2018_6rule7_eval_expression(context) {
    // "2018" > 100 AND "2018" <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2018']  > 100) && (feature.properties['2018']  <= 200));
    } else {
        return ((feature['2018']  > 100) && (feature['2018']  <= 200));
    }
}


function exp_Netmigration2018_6rule8_eval_expression(context) {
    // "2018" > 200 AND "2018" <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2018']  > 200) && (feature.properties['2018']  <= 300));
    } else {
        return ((feature['2018']  > 200) && (feature['2018']  <= 300));
    }
}


function exp_Netmigration2018_6rule9_eval_expression(context) {
    // "2018" > 300 AND "2018" <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2018']  > 300) && (feature.properties['2018']  <= 400));
    } else {
        return ((feature['2018']  > 300) && (feature['2018']  <= 400));
    }
}


function exp_Netmigration2018_6rule10_eval_expression(context) {
    // "2018" > 600 AND "2018" <= 700

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2018']  > 600) && (feature.properties['2018']  <= 700));
    } else {
        return ((feature['2018']  > 600) && (feature['2018']  <= 700));
    }
}


function exp_Netmigration2018_6rule11_eval_expression(context) {
    // "2018" > 900 AND "2018" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2018']  > 900) && (feature.properties['2018']  <= 1000));
    } else {
        return ((feature['2018']  > 900) && (feature['2018']  <= 1000));
    }
}


function exp_Netmigration2018_6rule12_eval_expression(context) {
    // "2018" > 1100 AND "2018" <= 1200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2018']  > 1100) && (feature.properties['2018']  <= 1200));
    } else {
        return ((feature['2018']  > 1100) && (feature['2018']  <= 1200));
    }
}


function exp_Netmigration2018_6rule13_eval_expression(context) {
    // "2018" > 1300 AND "2018" <= 1400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2018']  > 1300) && (feature.properties['2018']  <= 1400));
    } else {
        return ((feature['2018']  > 1300) && (feature['2018']  <= 1400));
    }
}


function exp_Netmigration2018_6rule14_eval_expression(context) {
    // "2018" > 1500 AND "2018" <= 1600

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2018']  > 1500) && (feature.properties['2018']  <= 1600));
    } else {
        return ((feature['2018']  > 1500) && (feature['2018']  <= 1600));
    }
}


function exp_Netmigration2017_7rule0_eval_expression(context) {
    // "2017" >= - 600 AND "2017" <= - 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2017']  >= - 600 ) && (feature.properties['2017']  <= - 500 ));
    } else {
        return ((feature['2017']  >= - 600 ) && (feature['2017']  <= - 500 ));
    }
}


function exp_Netmigration2017_7rule1_eval_expression(context) {
    // "2017" > - 500 AND "2017" <= - 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2017']  > - 500 ) && (feature.properties['2017']  <= - 400 ));
    } else {
        return ((feature['2017']  > - 500 ) && (feature['2017']  <= - 400 ));
    }
}


function exp_Netmigration2017_7rule2_eval_expression(context) {
    // "2017" > - 400 AND "2017" <= - 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2017']  > - 400 ) && (feature.properties['2017']  <= - 300 ));
    } else {
        return ((feature['2017']  > - 400 ) && (feature['2017']  <= - 300 ));
    }
}


function exp_Netmigration2017_7rule3_eval_expression(context) {
    // "2017" > - 300 AND "2017" <= - 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2017']  > - 300 ) && (feature.properties['2017']  <= - 200 ));
    } else {
        return ((feature['2017']  > - 300 ) && (feature['2017']  <= - 200 ));
    }
}


function exp_Netmigration2017_7rule4_eval_expression(context) {
    // "2017" > - 200 AND "2017" <= - 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2017']  > - 200 ) && (feature.properties['2017']  <= - 100 ));
    } else {
        return ((feature['2017']  > - 200 ) && (feature['2017']  <= - 100 ));
    }
}


function exp_Netmigration2017_7rule5_eval_expression(context) {
    // "2017" > - 100 AND "2017" <= 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2017']  > - 100 ) && (feature.properties['2017']  <= 0));
    } else {
        return ((feature['2017']  > - 100 ) && (feature['2017']  <= 0));
    }
}


function exp_Netmigration2017_7rule6_eval_expression(context) {
    // "2017" > 0 AND "2017" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2017']  > 0) && (feature.properties['2017']  <= 100));
    } else {
        return ((feature['2017']  > 0) && (feature['2017']  <= 100));
    }
}


function exp_Netmigration2017_7rule7_eval_expression(context) {
    // "2017" > 100 AND "2017" <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2017']  > 100) && (feature.properties['2017']  <= 200));
    } else {
        return ((feature['2017']  > 100) && (feature['2017']  <= 200));
    }
}


function exp_Netmigration2017_7rule8_eval_expression(context) {
    // "2017" > 200 AND "2017" <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2017']  > 200) && (feature.properties['2017']  <= 300));
    } else {
        return ((feature['2017']  > 200) && (feature['2017']  <= 300));
    }
}


function exp_Netmigration2017_7rule9_eval_expression(context) {
    // "2017" > 300 AND "2017" <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2017']  > 300) && (feature.properties['2017']  <= 400));
    } else {
        return ((feature['2017']  > 300) && (feature['2017']  <= 400));
    }
}


function exp_Netmigration2017_7rule10_eval_expression(context) {
    // "2017" > 600 AND "2017" <= 700

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2017']  > 600) && (feature.properties['2017']  <= 700));
    } else {
        return ((feature['2017']  > 600) && (feature['2017']  <= 700));
    }
}


function exp_Netmigration2017_7rule11_eval_expression(context) {
    // "2017" > 900 AND "2017" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2017']  > 900) && (feature.properties['2017']  <= 1000));
    } else {
        return ((feature['2017']  > 900) && (feature['2017']  <= 1000));
    }
}


function exp_Netmigration2017_7rule12_eval_expression(context) {
    // "2017" > 1100 AND "2017" <= 1200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2017']  > 1100) && (feature.properties['2017']  <= 1200));
    } else {
        return ((feature['2017']  > 1100) && (feature['2017']  <= 1200));
    }
}


function exp_Netmigration2017_7rule13_eval_expression(context) {
    // "2017" > 1300 AND "2017" <= 1400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2017']  > 1300) && (feature.properties['2017']  <= 1400));
    } else {
        return ((feature['2017']  > 1300) && (feature['2017']  <= 1400));
    }
}


function exp_Netmigration2017_7rule14_eval_expression(context) {
    // "2017" > 1500 AND "2017" <= 1600

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2017']  > 1500) && (feature.properties['2017']  <= 1600));
    } else {
        return ((feature['2017']  > 1500) && (feature['2017']  <= 1600));
    }
}


function exp_Netmigration2016_8rule0_eval_expression(context) {
    // "2016" >= - 600 AND "2016" <= - 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2016']  >= - 600 ) && (feature.properties['2016']  <= - 500 ));
    } else {
        return ((feature['2016']  >= - 600 ) && (feature['2016']  <= - 500 ));
    }
}


function exp_Netmigration2016_8rule1_eval_expression(context) {
    // "2016" > - 500 AND "2016" <= - 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2016']  > - 500 ) && (feature.properties['2016']  <= - 400 ));
    } else {
        return ((feature['2016']  > - 500 ) && (feature['2016']  <= - 400 ));
    }
}


function exp_Netmigration2016_8rule2_eval_expression(context) {
    // "2016" > - 400 AND "2016" <= - 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2016']  > - 400 ) && (feature.properties['2016']  <= - 300 ));
    } else {
        return ((feature['2016']  > - 400 ) && (feature['2016']  <= - 300 ));
    }
}


function exp_Netmigration2016_8rule3_eval_expression(context) {
    // "2016" > - 300 AND "2016" <= - 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2016']  > - 300 ) && (feature.properties['2016']  <= - 200 ));
    } else {
        return ((feature['2016']  > - 300 ) && (feature['2016']  <= - 200 ));
    }
}


function exp_Netmigration2016_8rule4_eval_expression(context) {
    // "2016" > - 200 AND "2016" <= - 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2016']  > - 200 ) && (feature.properties['2016']  <= - 100 ));
    } else {
        return ((feature['2016']  > - 200 ) && (feature['2016']  <= - 100 ));
    }
}


function exp_Netmigration2016_8rule5_eval_expression(context) {
    // "2016" > - 100 AND "2016" <= 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2016']  > - 100 ) && (feature.properties['2016']  <= 0));
    } else {
        return ((feature['2016']  > - 100 ) && (feature['2016']  <= 0));
    }
}


function exp_Netmigration2016_8rule6_eval_expression(context) {
    // "2016" > 0 AND "2016" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2016']  > 0) && (feature.properties['2016']  <= 100));
    } else {
        return ((feature['2016']  > 0) && (feature['2016']  <= 100));
    }
}


function exp_Netmigration2016_8rule7_eval_expression(context) {
    // "2016" > 100 AND "2016" <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2016']  > 100) && (feature.properties['2016']  <= 200));
    } else {
        return ((feature['2016']  > 100) && (feature['2016']  <= 200));
    }
}


function exp_Netmigration2016_8rule8_eval_expression(context) {
    // "2016" > 200 AND "2016" <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2016']  > 200) && (feature.properties['2016']  <= 300));
    } else {
        return ((feature['2016']  > 200) && (feature['2016']  <= 300));
    }
}


function exp_Netmigration2016_8rule9_eval_expression(context) {
    // "2016" > 300 AND "2016" <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2016']  > 300) && (feature.properties['2016']  <= 400));
    } else {
        return ((feature['2016']  > 300) && (feature['2016']  <= 400));
    }
}


function exp_Netmigration2016_8rule10_eval_expression(context) {
    // "2016" > 600 AND "2016" <= 700

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2016']  > 600) && (feature.properties['2016']  <= 700));
    } else {
        return ((feature['2016']  > 600) && (feature['2016']  <= 700));
    }
}


function exp_Netmigration2016_8rule11_eval_expression(context) {
    // "2016" > 900 AND "2016" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2016']  > 900) && (feature.properties['2016']  <= 1000));
    } else {
        return ((feature['2016']  > 900) && (feature['2016']  <= 1000));
    }
}


function exp_Netmigration2016_8rule12_eval_expression(context) {
    // "2016" > 1100 AND "2016" <= 1200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2016']  > 1100) && (feature.properties['2016']  <= 1200));
    } else {
        return ((feature['2016']  > 1100) && (feature['2016']  <= 1200));
    }
}


function exp_Netmigration2016_8rule13_eval_expression(context) {
    // "2016" > 1300 AND "2016" <= 1400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2016']  > 1300) && (feature.properties['2016']  <= 1400));
    } else {
        return ((feature['2016']  > 1300) && (feature['2016']  <= 1400));
    }
}


function exp_Netmigration2016_8rule14_eval_expression(context) {
    // "2016" > 1500 AND "2016" <= 1600

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2016']  > 1500) && (feature.properties['2016']  <= 1600));
    } else {
        return ((feature['2016']  > 1500) && (feature['2016']  <= 1600));
    }
}


function exp_Netmigration2015_9rule0_eval_expression(context) {
    // "2015" >= - 600 AND "2015" <= - 500

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2015']  >= - 600 ) && (feature.properties['2015']  <= - 500 ));
    } else {
        return ((feature['2015']  >= - 600 ) && (feature['2015']  <= - 500 ));
    }
}


function exp_Netmigration2015_9rule1_eval_expression(context) {
    // "2015" > - 500 AND "2015" <= - 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2015']  > - 500 ) && (feature.properties['2015']  <= - 400 ));
    } else {
        return ((feature['2015']  > - 500 ) && (feature['2015']  <= - 400 ));
    }
}


function exp_Netmigration2015_9rule2_eval_expression(context) {
    // "2015" > - 400 AND "2015" <= - 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2015']  > - 400 ) && (feature.properties['2015']  <= - 300 ));
    } else {
        return ((feature['2015']  > - 400 ) && (feature['2015']  <= - 300 ));
    }
}


function exp_Netmigration2015_9rule3_eval_expression(context) {
    // "2015" > - 300 AND "2015" <= - 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2015']  > - 300 ) && (feature.properties['2015']  <= - 200 ));
    } else {
        return ((feature['2015']  > - 300 ) && (feature['2015']  <= - 200 ));
    }
}


function exp_Netmigration2015_9rule4_eval_expression(context) {
    // "2015" > - 200 AND "2015" <= - 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2015']  > - 200 ) && (feature.properties['2015']  <= - 100 ));
    } else {
        return ((feature['2015']  > - 200 ) && (feature['2015']  <= - 100 ));
    }
}


function exp_Netmigration2015_9rule5_eval_expression(context) {
    // "2015" > - 100 AND "2015" <= 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2015']  > - 100 ) && (feature.properties['2015']  <= 0));
    } else {
        return ((feature['2015']  > - 100 ) && (feature['2015']  <= 0));
    }
}


function exp_Netmigration2015_9rule6_eval_expression(context) {
    // "2015" > 0 AND "2015" <= 100

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2015']  > 0) && (feature.properties['2015']  <= 100));
    } else {
        return ((feature['2015']  > 0) && (feature['2015']  <= 100));
    }
}


function exp_Netmigration2015_9rule7_eval_expression(context) {
    // "2015" > 100 AND "2015" <= 200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2015']  > 100) && (feature.properties['2015']  <= 200));
    } else {
        return ((feature['2015']  > 100) && (feature['2015']  <= 200));
    }
}


function exp_Netmigration2015_9rule8_eval_expression(context) {
    // "2015" > 200 AND "2015" <= 300

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2015']  > 200) && (feature.properties['2015']  <= 300));
    } else {
        return ((feature['2015']  > 200) && (feature['2015']  <= 300));
    }
}


function exp_Netmigration2015_9rule9_eval_expression(context) {
    // "2015" > 300 AND "2015" <= 400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2015']  > 300) && (feature.properties['2015']  <= 400));
    } else {
        return ((feature['2015']  > 300) && (feature['2015']  <= 400));
    }
}


function exp_Netmigration2015_9rule10_eval_expression(context) {
    // "2015" > 600 AND "2015" <= 700

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2015']  > 600) && (feature.properties['2015']  <= 700));
    } else {
        return ((feature['2015']  > 600) && (feature['2015']  <= 700));
    }
}


function exp_Netmigration2015_9rule11_eval_expression(context) {
    // "2015" > 900 AND "2015" <= 1000

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2015']  > 900) && (feature.properties['2015']  <= 1000));
    } else {
        return ((feature['2015']  > 900) && (feature['2015']  <= 1000));
    }
}


function exp_Netmigration2015_9rule12_eval_expression(context) {
    // "2015" > 1100 AND "2015" <= 1200

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2015']  > 1100) && (feature.properties['2015']  <= 1200));
    } else {
        return ((feature['2015']  > 1100) && (feature['2015']  <= 1200));
    }
}


function exp_Netmigration2015_9rule13_eval_expression(context) {
    // "2015" > 1300 AND "2015" <= 1400

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2015']  > 1300) && (feature.properties['2015']  <= 1400));
    } else {
        return ((feature['2015']  > 1300) && (feature['2015']  <= 1400));
    }
}


function exp_Netmigration2015_9rule14_eval_expression(context) {
    // "2015" > 1500 AND "2015" <= 1600

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['2015']  > 1500) && (feature.properties['2015']  <= 1600));
    } else {
        return ((feature['2015']  > 1500) && (feature['2015']  <= 1600));
    }
}